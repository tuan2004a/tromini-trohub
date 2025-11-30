import { Router } from "express";
import {UserController} from "./user.controller";
import { Request, Response, NextFunction } from "express";
import { authMiddleware } from "@/middleware/authMiddleware";


const router: any = Router();
const userController = new UserController();

router.get("/getalluser", authMiddleware, userController.getAllUsers.bind(userController));

export default router;