import { PaginationResult } from "@/utils/pagination";
import { Room, RoomModel } from "./room.model";
import { RoomType, CreateRoom, UpdateRoom, SearchFilters } from "./room.type";
import mongoose from "mongoose";

export class RoomRepository {
	constructor() {}

	/*----- CRUD ----- */

	async getAllRoomsRepo(page: number = 1, limit: number = 10): Promise<PaginationResult<RoomModel>> {
		// làm seach query

		const pagination = {
			page,
			limit,
			sort: { createdAt: -1 },
		};

		const result: any = await Room.paginate({}, pagination);

		return result;
	}

	async createRoom(CreateData: CreateRoom): Promise<RoomModel> {
		return new Room(CreateData).save();
	}

	async updatedRoom(id: string, UpdateData: UpdateRoom): Promise<RoomModel | null> {
		if (!this.isValidObjectId(id)) return null;
		return Room.findByIdAndUpdate(id, { $set: UpdateData }, { new: true, runValidators: true });
	}

	async deletedRoom(id: string): Promise<RoomModel | null> {
		if (!this.isValidObjectId(id)) return null;
		return Room.findByIdAndDelete(id);
	}

	/* ----- Get Find ----- */

	async findroomById(id: string): Promise<RoomModel | null> {
		if (!this.isValidObjectId(id)) return null;
		return Room.findById(id);
	}

	/* ----- Other ----- */

	// async filterRooms(): Promise<RoomModel | null> {
	// 	return
	// }

	// 🛡️ Private method
	private isValidObjectId(id: string): boolean {
		return mongoose.Types.ObjectId.isValid(id);
	}

	private buildSearchQuery( filters:SearchFilters): Record<string, any> {
		const query: Record<string, any> = {};

		if (filters.name !== undefined ) {
			query.name = { $regex: filters.name, $options: "i" };
		}

		if(filters.status !== undefined){
			query.status = filters.status;
		}

		

		return query;
	}
}