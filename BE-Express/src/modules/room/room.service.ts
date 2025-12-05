import { ApiError } from "@/utils/ApiError";
import { RoomRepository } from "./room.repository";
import { logError } from "@/utils/logger";
import { RoomDto, PaginatedRoomDto, CreateRequest, UpdateRequest } from "./room.dto";
import { Room, RoomModel } from "./room.model";
import { GetUsersParams, RoomResponse } from "./room.type";

export class RoomService {
	private readonly roomRepository: RoomRepository;

	constructor() {
		this.roomRepository = new RoomRepository();
	}

	/* ----- CRUD User ----- */

	async getAllRooms(params: GetUsersParams): Promise<PaginatedRoomDto> {
		const { page, limit, search, filters } = params;
		const result = await this.roomRepository.getAllRoomsRepo(page, limit);

		return {
			...result,
			docs: result.docs.map((u) => ({
				_id: u._id.toString(),
				type: u.type,
				name: u.name,
				status: u.status,
				price: u.price,
				areaSize: u.areaSize,
				images: u.images,
				description: u.description,
			})),
		};
	}

	async createRoom(CreateData: CreateRequest): Promise<RoomResponse> {
		try {
			const room = await this.roomRepository.createRoom(CreateData);

			return this.formatRoomResponse(room);
		} catch (error) {
			logError("Service-Create:", error);
			throw ApiError.internal("Lỗi tạo phòng");
		}
	}

	async updateRoom(id: string, UpdateData: UpdateRequest): Promise<RoomResponse> {
		try {
			const room = await this.roomRepository.updatedRoom(id, UpdateData);
			if (!room) {
				throw ApiError.notFound("Không tìm thấy phòng");
			}

			return this.formatRoomResponse(room);
		} catch (error) {
			logError("Service-Update:", error);
			throw ApiError.internal("Lỗi cập nhập phòng");
		}
	}

	async deletedRoom(id: string): Promise<RoomModel | null> {
		try {
			const room = await this.roomRepository.deletedRoom(id);
			if (!room) {
				throw ApiError.notFound("Không tìm thấy phòng");
			}

			return room;
		} catch (error) {
			logError("Service-Delete:", error);
			throw ApiError.internal("Lỗi xóa phòng");
		}
	}

	/* ----- Get Find ----- */

	async findroomById(id: string): Promise<RoomResponse> {
		try {
			const room = await this.roomRepository.findroomById(id);
			if (!room) {
				throw ApiError.notFound("Không tìm thấy phòng");
			}

			return this.formatRoomResponse(room);
		} catch (error) {
			logError("Service-FindById:", error);
			throw ApiError.internal("Lỗi tìm phòng theo Id");
		}	
	}

	//🛡️ Private method
	private formatRoomResponse(room: RoomModel): RoomResponse {
		return {
			_id: room._id.toString(),
			type: room.type,
			name: room.name,
			price: room.price,
			description: room.description,
			status: room.status,
			tag: room.tag,
			areaSize: room.areaSize,
			images: room.images,
		};
	}
}
