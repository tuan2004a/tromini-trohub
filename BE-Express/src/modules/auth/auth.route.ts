import { Router } from "express";
import { AuthController } from "./auth.controller";
import { authMiddleware } from "@/middleware/authMiddleware";

const router: Router = Router();
const authController = new AuthController();

// public routes
router.post("/signup", authController.signUp);
router.post("/login", authController.logIn);
router.post("/refresh-token", authController.refreshToken);

// private routes
router.use(authMiddleware); 

export default router;