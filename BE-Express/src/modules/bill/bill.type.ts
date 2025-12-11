import { UsageTypes } from "./bill.model";

export enum BillStatus{
    UNPAID = "Chưa thanh toán",
    PAID = "Đã thanh toán",
    CANCELLED = "Hủy bỏ thanh toán",
    EDITING = "Đang chỉnh sữa"
}

export interface SearchFilters {
	room_id: string;
	dayTime: string
}

export interface BillType{
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

export interface CreateBill {
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

export interface UpdateBill {
	electricity?: UsageTypes[];
	water?: UsageTypes[];
	note?: string;
	status?: string;
	total?: string;
	service_Id?: string;
	paymentMethod?: string;
}

export interface GetUsersParams {
	page: number;
	limit: number;
	search?: string;
	filters?: any;
}