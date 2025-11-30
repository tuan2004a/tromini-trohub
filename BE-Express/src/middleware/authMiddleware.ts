import { JwtUtils } from "@/utils/jwt";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sendError } from "@/utils/response";
import { UserService } from '@/modules/user/user.service';
import { ApiError } from "@/utils/ApiError";
import { logError, logWarn } from "@/utils/logger";
import { UserModel } from "@/modules/user/user.model";


export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
        const token = extractToken(req);
        if (!token) {
			throw new ApiError(401, "Không tìm thấy access token");
		}

        const user = getUserFromToken(token);
        if (!user) {
			throw new ApiError(401, "Invalid or expired token");
		}
        
        (req as any).user = user;
        
        return next();
	} catch (error) {
		logError("AUTH: 500", error);
		return void res.status(500).json({ message: "Lỗi xác thực, vui lòng thử lại" });
    }
};


const extractToken = (req: Request): string | null => {
	const authHeader = req.headers["authorization"];
	if (!authHeader) return null;

	const token = authHeader.split(" ")[1];
	return token || null;
};

const getUserFromToken = async (token: string): Promise<void | UserModel | null> => {
	try {
		const decoded = JwtUtils.verifyAccessToken(token);
		if (!decoded.id) {
			throw new ApiError(401, "Access token không hợp lệ hoặc đã hết hạn");
		}

		const userService = new UserService();
		const user = await userService.findUserById(decoded.id);
		if (!user) {
			throw new Error("Invalid or expired token");
		}

		return user || null;
	} catch (err) {
		logError("Token verification failed:", err);
		return null;
	}
};