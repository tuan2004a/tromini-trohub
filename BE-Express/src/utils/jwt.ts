import jwt from "jsonwebtoken";
import crypto from "crypto";
import { ApiError } from "./ApiError";
import { logError } from "./logger";

export interface JwtPayload {
	id: string;
	phone: string;
	role?: string;
	sessionId: string;
}

export interface TokenPair {
	accessToken: string;
	refreshToken: string;
	sessionId: string;
}

interface UserTokenSource {
	_id: { toString(): string } | string;
	phone: string;
	role?: string;
}

export class JwtUtils {
	private static readonly ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret";
	private static readonly REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret";
	private static readonly ACCESS_TOKEN_EXPIRES_IN = "15m";
	private static readonly REFRESH_TOKEN_EXPIRES_IN = "7d";

	static generateSessionId(): string {
		return crypto.randomUUID();
	}

	//generaten access token
	static generateAccessToken(payload: JwtPayload): string {
		try {
			return jwt.sign(payload, this.ACCESS_TOKEN_SECRET, {
				expiresIn: this.ACCESS_TOKEN_EXPIRES_IN,
				issuer: "solove-api",
				audience: "solove-client",
			} as jwt.SignOptions);
		} catch (error) {
			logError("Error generating access token:", error);
			throw new ApiError(500, "Failed to generate access token");
		}
	}

	//generaten refresh token
	static generateRefreshToken(sessionId: string): string {
		try {
			const randomPart = crypto.randomBytes(32).toString("hex");
			return `${sessionId}.${randomPart}`;
		} catch (error) {
			logError("Error generating access token:", error);
			throw new ApiError(500, "Failed to generate access token");
		}
	}

	//verify Access Token
	static verifyAccessToken(token: string): JwtPayload {
		try {
			return jwt.verify(token, this.ACCESS_TOKEN_SECRET, {
				issuer: "solove-api",
				audience: "solove-client",
			}) as JwtPayload;
		} catch (error) {
			console.log("Error generating access token:", error);
			throw new Error("Failed to generate access token");
		}
	}

	//verify Refresh Token
	static verifyRefreshToken(token: string): { sessionId: string } {
		try {
			if (!token) throw new ApiError(401, "Refresh token is required");
			if (typeof token !== "string") {
				throw new ApiError(401, "Token must be a string");
			}

			const [sessionId, secret] = token.split(".");
			if (!sessionId || !secret) {
				throw new ApiError(401, "Invalid refresh token format");
			}

			return { sessionId };
		} catch (error) {
			console.log("Error verifying refresh token:", error);
			throw new Error("refresh token không hợp lệ");
		}
	}

	static generateTokenPair(user: UserTokenSource, sessionId: string): TokenPair {
		const payload: JwtPayload = {
			id: typeof user._id === "string" ? user._id : user._id.toString(),
			phone: user.phone,
			role: user.role,
			sessionId,
		};

		return {
			accessToken: this.generateAccessToken(payload),
			refreshToken: this.generateRefreshToken(sessionId),
			sessionId,
		};
	}

	//Băm giá trị token bằng thuật toán SHA-256 để lưu trữ an toàn
	static hashToken(token: string): string {
		return crypto.createHash("sha256").update(token).digest("hex");
	}

	//giửi token hết hạn 
	static getTokenExpiration(token: string): Date | null {
		try {
			const decoded = jwt.decode(token) as any;
			if (!decoded || !decoded.exp) {
				return null;
			}
			return new Date(decoded.exp * 1000);
		} catch (error) {
			logError("Error getting token expiration:", error);
			return null;
		}
	}

	//trả về refresh token sẽ hết hạn
	static getRefreshTokenExpiryDate(): Date {
		const ttlMs = this.parseDurationToMs(this.REFRESH_TOKEN_EXPIRES_IN) || 7 * 24 * 60 * 60 * 1000;
		return new Date(Date.now() + ttlMs);
	}

	static getAccessTokenExpiryFromToken(accessToken: string): Date | null {
		return this.getTokenExpiration(accessToken);
	}

	// chuyển đổi chuỗi thời gian
	private static parseDurationToMs(duration: string): number {
		// Regex kiểm tra định dạng: số + đơn vị (s/m/h/d)
		const match = /^(\d+)([smhd])$/i.exec(duration.trim());

		if (!match) {
			const numeric = Number(duration);
			// Nếu duration là số → dùng luôn
			if (!Number.isNaN(numeric)) {
				return numeric;
			}
			return 0;
		}

		// Lấy giá trị số và đơn vị
		const value = Number(match[1]);
		const unit = match[2].toLowerCase();

		switch (unit) {
			case "s":
				return value * 1000;
			case "m":
				return value * 60 * 1000;
			case "h":
				return value * 60 * 60 * 1000;
			case "d":
				return value * 24 * 60 * 60 * 1000;
			default:
				return 0;
		}
	}
}