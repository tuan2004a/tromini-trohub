import { RoomStatus, CreateRoom } from "./room.type";

export interface RoomDto {
	_id: string;
	type: string;
	name: string;
	status?: RoomStatus;
	price: number;
	tag?: string[];
	areaSize?: number;
	images?: string[];
	description: string;
}

export type CreateDto = Omit<RoomDto, "_id">;
// export type CreateDto = Omit<CreateRoom, "_id">;

export interface PaginatedRoomDto {
	docs: RoomDto[];
	totalDocs: number;
	limit: number;
	page?: number;
	totalPages: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage?: number | null;
	nextPage?: number | null;
}
