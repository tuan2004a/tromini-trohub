import { Router } from "express";
import { RoomController } from "./room.controller";

import { authMiddleware } from "@/middleware/authMiddleware";

const router: any = Router();
const roomController = new RoomController();

//🌐 public routes

//🛡️ private routes
router.use(authMiddleware);
router.get("/getAllRooms", roomController.GetAllRooms.bind(roomController));
router.post("/create-room", roomController.CreateRoom.bind(roomController));

export default router;