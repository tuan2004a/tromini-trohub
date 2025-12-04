export enum RoomStatus {
	AVAILABLE = "còn trống",
    RENTED = "đã cho thuê",
    MAINTENANCE = "đang bảo trì",
    OTHER = "khác",
}

export interface GetUsersParams {
	page: number;
	limit: number;
	search?: string;
	filters?: any;
}

export interface RoomType {
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

export interface CreateRoom {
	type?: string;
	name?: string;
	status?: RoomStatus;
	price?: number;
	tag?: string[];
	areaSize?: number;
	images?: string[];
	description?: string;
}

export type RoomResponse = RoomType;