/// <reference types="jest" />
import request from "supertest";
import express, { Request, Response, NextFunction } from "express";
import { AuthController } from "../../modules/auth/auth.controller";
import { AuthService } from "../../modules/auth/auth.service";
import { ApiError } from "@/utils/ApiError";
import * as JwtUtils from "@/utils/jwt";

const app = express();
app.use(express.json());

const mockUserService = {
	findUserBySessionId: jest.fn(),
	removeUserSession: jest.fn(),
	updateUserSession: jest.fn(),
};

const authService = new AuthService();
const authController = new AuthController();

// Mount route
app.post("/refresh-token", (req, res, next) => {
	return authController.refreshToken(req, res, next);
});

describe("POST /auth/refresh-token", () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	test("Thành công trả về 201 với access + refresh token", async () => {
		// Mock service trả về kết quả hợp lệ
		jest.spyOn(authService, "refreshToken").mockResolvedValue({
			accessToken: "access-123",
			refreshToken: "refresh-123",
			sessionId: "session-1",
			accessTokenExpiresAt: new Date(),
			refreshTokenExpiresAt: new Date(),
		});

		const res = await request(app).post("/refresh-token").send({ refreshToken: "valid-token" });

		expect(res.status).toBe(201);
		expect(res.body).toHaveProperty("accessToken", "access-123");
		expect(res.body).toHaveProperty("refreshToken", "refresh-123");
		expect(res.body).toHaveProperty("sessionId", "session-1");
	});

	test("User không tồn tại => 401", async () => {
		jest.spyOn(authService, "refreshToken").mockImplementation(() => {
			throw new ApiError(401, "User not found");
		});

		const res = await request(app).post("/refresh-token").send({ refreshToken: "token-user-not-exist" });

		expect(res.status).toBe(401);
		expect(res.body.message).toMatch(/User not found/);
	});

	test("Session không tồn tại => 401", async () => {
		jest.spyOn(authService, "refreshToken").mockImplementation(() => {
			throw new ApiError(401, "Invalid or expired refresh token");
		});

		const res = await request(app).post("/refresh-token").send({ refreshToken: "token-session-invalid" });

		expect(res.status).toBe(401);
		expect(res.body.message).toMatch(/Invalid or expired refresh token/);
	});

	test("Hash refresh token không khớp => 401", async () => {
		jest.spyOn(authService, "refreshToken").mockImplementation(() => {
			throw new ApiError(401, "Invalid or expired refresh token");
		});

		const res = await request(app).post("/refresh-token").send({ refreshToken: "token-hash-mismatch" });

		expect(res.status).toBe(401);
		expect(res.body.message).toMatch(/Invalid or expired refresh token/);
	});

	test("Session hết hạn => 401 và remove session", async () => {
		const removeSpy = jest.spyOn(authService["userService"], "removeUserSession").mockResolvedValue(undefined);

		jest.spyOn(authService, "refreshToken").mockImplementation(() => {
			throw new ApiError(401, "Invalid or expired refresh token");
		});

		const res = await request(app).post("/refresh-token").send({ refreshToken: "token-expired" });

		expect(res.status).toBe(401);
		expect(removeSpy).toHaveBeenCalled();
	});

	test("JWT verify lỗi => 401", async () => {
		jest.spyOn(JwtUtils as any, "verifyRefreshToken").mockImplementation(() => {
			throw new Error("Invalid JWT");
		});

		const res = await request(app).post("/refresh-token").send({ refreshToken: "token-invalid-jwt" });

		expect(res.status).toBe(401);
		expect(res.body.message).toMatch(/Lỗi Refresh token/);
	});
});
