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
router.put("/update-room/:id", roomController.UpdateRoom.bind(roomController));
router.delete("/delete-room/:id", roomController.DeleteRoom.bind(roomController));

router.get("/find-room/:id", roomController.FindRoomById.bind(roomController));

export default router;