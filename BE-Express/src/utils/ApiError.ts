// utils/ApiError.ts
export class ApiError extends Error {
	statusCode: number;
	isOperational: boolean;
	errors?: any;

	constructor(statusCode: number, message: string, errors?: any, isOperational = true) {
		super(message);

		this.statusCode = statusCode;
		this.isOperational = isOperational;
		this.errors = errors;

		Error.captureStackTrace(this, this.constructor);
	}

	//lỗi validate input, body sai, thiếu dữ liệu
	static badRequest(msg: string, errors?: any) {
		return new ApiError(400, msg, errors);
	}

	//chưa đăng nhập hoặc token không hợp lệ
	static unauthorized(msg = "Unauthorized") {
		return new ApiError(401, msg);
	}

	//không có quyền làm hành động đó
	static forbidden(msg = "Forbidden") {
		return new ApiError(403, msg);
	}

	//không tìm thấy tài nguyên
	static notFound(msg = "Not Found") {
		return new ApiError(404, msg);
	}

	//lỗi hệ thống
	static internal(msg = "Internal Server Error", errors?: any) {
		return new ApiError(500, msg, errors, false);
	}
}
