// middlewares/errorHandler.ts
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";

export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
	console.error("🔥 Global Error Handler:", err);

	const status = err.status || 500;

	return res.status(status).json({
		success: false,
		message: err.message || "Internal Server Error",
		errors: err.errors || null,
	});
};
