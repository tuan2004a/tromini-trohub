import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";
import { LoginRequest, RegisterRequest, RefreshTokenRequest } from "./auth.type";
import { sendSuccess } from "@/utils/response";
import { logError } from "@/utils/logger";
import { ApiError } from "@/utils/ApiError";


export class AuthController {
	private readonly authService: AuthService;

	constructor() {
		this.authService = new AuthService();
	}

	signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const registerData: RegisterRequest = req.body;

			const result = await this.authService.signUp(registerData);

			return sendSuccess(res.status(201), result, "Đăng ký thành công");
		} catch (error) {
			logError("lỗi đăng ký: ", error);
			throw ApiError.badRequest("Lỗi đăng ký");

		}
	};

	logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const LoginData: LoginRequest = req.body;

			const result = await this.authService.lognIn(LoginData);

			return sendSuccess(res.status(201), result, "Đăng nhập thành công");
		} catch (error) {
			logError("lỗi đăng nhập: ", error);
			throw error;
		}
	};

	refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const RefreshTokenData: RefreshTokenRequest = req.body;

			const result = await this.authService.refreshToken(RefreshTokenData.refreshToken);

			return sendSuccess(res.status(201), result, "refresh thành công");
		} catch (error) {
			logError("refresh token thất bại: ", error);
			throw error;
		}
	};
}
