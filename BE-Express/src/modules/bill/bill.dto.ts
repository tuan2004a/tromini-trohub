import { UsageTypes } from "./bill.model";

export interface BillDto{
    _id: string;
    billCode: string;
    room_Id: string;
    service_Id: string;
    electricity: UsageTypes[];
    water: UsageTypes[];
    note: string;
    status: string;
    total: string
}

export interface PaginatedBillDto {
	docs: BillDto[];
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
	_id: string;
	billCode: string;
	room_Id: string;
	service_Id: string;
	electricity: UsageTypes[];
	water: UsageTypes[];
	note: string;
	status: string;
	total: string;
}

export interface UpdateRequest {
	electricity?: UsageTypes[];
	water?: UsageTypes[];
	note?: string;
	status?: string;
	total?: string;
	service_Id?: string;
	paymentMethod?: string;
}

export type BillResponse = Partial<BillDto>;