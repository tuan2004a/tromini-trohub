import { logError } from "@/utils/logger";
import { RoomService } from "./room.service";
import { ApiError } from "@/utils/ApiError";
import { Request, Response, NextFunction } from "express";
import { sendSuccess } from "@/utils/response";
import { CreateRequest, UpdateRequest } from "./room.dto";

export class RoomController {
	private readonly roomService: RoomService;

	constructor() {
		this.roomService = new RoomService();
	}

	GetAllRooms = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { page = "1", limit = "10", search, filters } = req.query;
			const result = await this.roomService.getAllRooms({
				page: parseInt(page as string, 10),
				limit: parseInt(limit as string, 10),
				search: search as string | undefined,
				filters: filters ? JSON.parse(filters as string) : undefined,
			});

			return sendSuccess(res, result, "Lấy danh sách phòng thành công");
		} catch (error) {
			logError("Lỗi lấy danh sách phòng:", error);
			next(ApiError.badRequest("Lỗi lấy danh sách phòng"));
		}
	};

	CreateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const CreateRoomData: CreateRequest = req.body;

			const result = await this.roomService.createRoom(CreateRoomData);

			return sendSuccess(res.status(201), result, "Tạo phòng thành công");
		} catch (error) {
			logError("Lỗi tạo phòng: ", error);
			next(ApiError.badRequest("Lỗi tạo phòng"));
		}
	};

	UpdateRoom = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const UpdateRoomData: UpdateRequest = req.body;
			const result = await this.roomService.updateRoom(id, UpdateRoomData);

			return sendSuccess(res, result, "Cập nhập phòng thành công");
		} catch (error) {
			logError("Lỗi cập nhập: ", error);
			next(ApiError.badRequest("Lỗi cập nhập"));
		}
	};

	DeleteRoom = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { id } = req.params;
			const result = await this.roomService.deletedRoom(id);

			return sendSuccess(res, result, "Xoá phòng thành công");
		} catch (error) {
			logError("Lỗi xóa phòng: ", error);
			next(ApiError.badRequest("Lỗi xóa phòng"));
		}
	};
}
