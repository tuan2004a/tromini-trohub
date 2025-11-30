import bcrypt from "bcryptjs";
import {UserService} from "../user/user.service";
import { RegisterRequest, AuthResponse, LoginRequest, RefreshTokenResponse } from "./auth.type";
import { logError, logWarn, logInfo } from "@/utils/logger";
import { ApiError } from "@/utils/ApiError";


import dotenv from "dotenv";
import { JwtUtils } from "@/utils/jwt";
import { IUserSession, UserModel } from "../user/user.model";

dotenv.config();


type TokenizableUser = Pick< UserModel, '_id' | 'phone' | 'role'>;

export class AuthService {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	async signUp(registerData: RegisterRequest): Promise<AuthResponse | undefined> {
		try {
			const { phone, password, displayName } = registerData;

			if (!phone || !password || !displayName) {
				throw new Error("Thiếu thông tin đăng ký");
			}

			const duplicate = await this.userService.findUserByPhone(phone);
			if (duplicate) {
				throw new Error("Số điện thoại đã được sử dụng");
			}

			const hashedPassword = await bcrypt.hash(password, 10); // salt = 10

			const user: UserModel | null | undefined = await this.userService.createUser({
				phone,
				hashedPassword: hashedPassword,
				displayName,
			});

			if (!user) {
				throw new ApiError(201, "Tạo người dùng thất bại");
			}

			const refreshToken = await this.createSessionRefreshToken(user);

			return this.formatAuthResponse(user, refreshToken);
		} catch (error) {
			console.log("Registration failed:", error);
			throw error;
		}
	}

	async lognIn(loginData: LoginRequest): Promise<AuthResponse | undefined> {
		try {
			const User = await this.userService.findUserByPhone(loginData.phone);
			if (!User) {
				throw new ApiError(401, "Không tìm thấy SĐT");
			}

			const verifyPassword = await bcrypt.compare(loginData.password, User.hashedPassword);

			if (!verifyPassword) {
				throw new ApiError(401, "username hoặc password không chính xác");
			}

			const refreshToken = await this.createSessionRefreshToken(User);

			return this.formatAuthResponse(User, refreshToken);
		} catch (error) {
			logError("Đăng nhập thất bại", error);
			throw new ApiError(401, "Lỗi đăng nhập");
		}
	}

	async refreshToken(refreshToken: string): Promise<RefreshTokenResponse | undefined> {
		try {
			const { sessionId } = JwtUtils.verifyRefreshToken(refreshToken);
			const incomingHash = JwtUtils.hashToken(refreshToken);
			const user = await this.userService.findUserBySessionId(sessionId);

			if (!user) {
				throw new ApiError(401, "không tìm thấy User");
			}

			const session = this.findSession(user.sessions, sessionId);
			if (!session) {
				throw new ApiError(401, "Không tìm thấy session tương ứng trong user");
			}

			if (session.hashed_refresh_token !== incomingHash) {
				throw new ApiError(401, "Hash token không khớp hoặc đã bị thay đổi");
			}

			if (session.created_at <= new Date()) {
				await this.userService.removeUserSession(user._id.toString(), session.session_id);
				throw new ApiError(401, "Token hết hạn");
			}

			return this.rotateSessionTokensWithExpiry(user as TokenizableUser, session.session_id);
		} catch (error) {
			logError("Refresh token failed:", error);
			throw new ApiError(401, "Lỗi Refresh token");
		}
	}

	/* --------- 🛠️ Private helper methods ---------*/

	private async createSessionRefreshToken(user: TokenizableUser): Promise<{ refreshToken: string; sessionId: string }> {
		const sessionId = JwtUtils.generateSessionId();
		const refreshToken = JwtUtils.generateRefreshToken(sessionId);
		await this.userService.createSessionUser(user._id.toString(), {
			session_id: sessionId,
			hashed_refresh_token: JwtUtils.hashToken(refreshToken),
			expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
			created_at: new Date(),
		});

		return { sessionId, refreshToken };
	}

	// Định dạng dữ liệu trả AuthResponse
	private async formatAuthResponse(user: any, tokenData: { refreshToken: string; sessionId: string }): Promise<AuthResponse> {
		return {
			user: {
				id: user._id.toString(),
				email: user.email,
				name: user.name,
				isVerified: user.isVerified,
				role: user.role,
			},
			refreshToken: tokenData.refreshToken,
			sessionId: tokenData.sessionId,
		};
	}

	// rotate refresh token
	private async rotateSessionTokensWithExpiry(user: TokenizableUser, sessionId: string): Promise<RefreshTokenResponse | undefined> {
		const tokens = JwtUtils.generateTokenPair(user, sessionId);

		// refresh token sẽ hết hạn
		const refreshTokenExpiresAt = JwtUtils.getRefreshTokenExpiryDate();

		//Lưu refresh token mới vào DB (chỉ lưu hashed token để bảo mật)
		await this.userService.updateUserSession(user._id.toString(), sessionId, {
			hashed_refresh_token: JwtUtils.hashToken(tokens.refreshToken),
			expires_at: refreshTokenExpiresAt,
		});

		// Lấy access token mới hết hạn (đọc từ payload JWT)
		const accessTokenExpiresAt = JwtUtils.getAccessTokenExpiryFromToken(tokens.accessToken);
		if (!accessTokenExpiresAt) {
			throw new ApiError(500, "Failed to get access token expiry");
		}

		return {
			accessToken: tokens.accessToken,
			refreshToken: tokens.refreshToken,
			sessionId: tokens.sessionId,
			accessTokenExpiresAt,
			refreshTokenExpiresAt,
		};
	}

	// tìm 1 session trong danh sách sessions của user.
	private findSession(session: IUserSession[] | undefined, sessionId: string): IUserSession | undefined {
		return session?.find((session) => session.session_id === sessionId);
	}
}