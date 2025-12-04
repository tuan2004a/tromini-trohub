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

export interface CreateRequest {
	type?: string;
	name?: string;
	status?: RoomStatus;
	price?: number;
	tag?: string[];
	areaSize?: number;
	images?: string[];
	description?: string;
}

export interface UpdateRequest {
	type?: string;
	name?: string;
	status?: RoomStatus;
	price?: number;
	tag?: string[];
	areaSize?: number;
	images?: string[];
	description?: string;
}

export interface RoomRespone extends RoomDto {}