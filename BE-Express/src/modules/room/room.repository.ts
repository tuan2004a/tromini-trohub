import mongoose from "mongoose";
import { PaginationResult } from "@/utils/pagination";
import { Room, RoomModel } from './room.model';

export class RoomRepository {
	constructor() {}

	/*----- CRUD ----- */

	async getAllRoomsRepo() {}

	async createRoom(CreateData: RoomModel): Promise<RoomModel> {
		return new Room(CreateData).save();
	}

	/* ----- Get Find ----- */
}

