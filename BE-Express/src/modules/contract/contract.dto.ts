import { ContractStatus, CreateContract, UpdateContract } from "./contract.type";

export interface ContractDto {
    _id: string
    title?: string;
    representative_Id?: string;
    room_id?: string;
    status?: ContractStatus;
    image?: string;
    contractFile?: string;
}

export interface PaginatedRoomDto {
	docs: ContractDto[];
	totalDocs: number;
	limit: number;
	page?: number;
	totalPages: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage?: number | null;
	nextPage?: number | null;
}

export interface CreateRequest extends CreateContract {}

export interface UpdateRequest extends UpdateContract {}