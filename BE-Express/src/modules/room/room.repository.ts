import mongoose from "mongoose";
import { PaginationResult } from "@/utils/pagination";
import { Room, RoomModel } from './room.model';
import { CreateRoom } from "./room.type";

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

	/* ----- Get Find ----- */
}

