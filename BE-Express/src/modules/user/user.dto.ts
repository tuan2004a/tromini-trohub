import { UserRole } from "./user.type";

export interface UserDto {
	_id: string;
	phone: string;
	displayName: string;
	role?: "user" | "admin" | "super_admin";
}

export interface PaginatedUserDto {
	docs: UserDto[];
	totalDocs: number;
	limit: number;
	page?: number;
	totalPages: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage?: number | null;
	nextPage?: number | null;
}

export interface UpdateRequest {
	_id: string;
	phone: string;
	hashedPassword: string;
	displayName: string;
	contractId: string;
	roomId: string;
	role?: UserRole;
}