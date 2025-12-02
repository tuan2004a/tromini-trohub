import { Router } from "express";
import {UserController} from "./user.controller";
import { Request, Response, NextFunction } from "express";
import { authMiddleware } from "@/middleware/authMiddleware";


const router: any = Router();
const userController = new UserController();

//🌐 public routes

//🛡️ private routes
router.use(authMiddleware); 
router.get("/getalluser", userController.getAllUsers.bind(userController));

export default router;