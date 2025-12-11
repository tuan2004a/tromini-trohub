import { ServiceTypes } from "./service.type";

export interface ServiceDto {
    _id: string;
    name: string;
    price: number;
    isActive: boolean;
    image: string;
    note: string;
    types: ServiceTypes;
}

export interface PaginatedServiceDto {
	docs: ServiceDto[];
	totalDocs: number;
	limit: number;
	page?: number;
	totalPages: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage?: number | null;
	nextPage?: number | null;
}

export interface CreateRequest {}
export interface UpdateRequest {}

export type ServiceResponse = Partial<ServiceDto>;