import { logError } from "@/utils/logger";
import { RoomService } from "./room.service";
import { ApiError } from "@/utils/ApiError";
import { Request, Response, NextFunction } from "express";
import { sendSuccess } from "@/utils/response";
import { CreateDto } from "./room.dto";
import { Room, RoomModel } from "./room.model";



export class RoomController {
	private readonly roomService: RoomService;

	constructor() {
		this.roomService = new RoomService();
	}

	CreateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const CreateRoomData: CreateDto = req.body;

			const result = await this.roomService.createRoom(CreateRoomData);

			return sendSuccess(res.status(201), result, "Tạo phòng thành công");
		} catch (error) {
			logError("Lỗi tạo phòng: ", error);
			next(ApiError.badRequest("Lỗi tạo phòng"));
		}
	};
}