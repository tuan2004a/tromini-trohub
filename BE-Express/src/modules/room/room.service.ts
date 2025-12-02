import { ApiError } from "@/utils/ApiError";
import { RoomRepository } from "./room.repository";
import { logError } from "@/utils/logger";
import { CreateDto } from "./room.dto";
import { Room, RoomModel } from "./room.model";


export class RoomService {
	private readonly roomRepository: RoomRepository;

	constructor() {
		this.roomRepository = new RoomRepository();
	}

	/* ----- CRUD User ----- */

	async createRoom(CreateData: CreateDto): Promise<RoomModel> {
		try {
			const roomData: RoomModel = new Room(CreateData);
			return await this.roomRepository.createRoom(roomData);
		} catch (error) {
			logError("Service-Create:", error);
			throw ApiError.internal("Lỗi tạo phòng");
		}
	}

	/* ----- Get Find ----- */

	//🛡️ Private method
}