export enum ContractStatus {
	ACTIVE = "Đang thuê",
	COMPLETED = "Đã trả phòng",
	TERMINATED = "Chấm dứt thuê trước hạn",
	DEPOSIT_PAID = "Đã đặt cọc",
}

export interface ContractType {
	title?: string;
	representative_Id?: string;
	room_id?: string;
	status?: ContractStatus;
	image?: string;
	contractFile?: string;
}

export interface CreateContract {
	title?: string;
	representative_Id?: string;
	room_id?: string;
	status?: ContractStatus;
	image?: string;
	contractFile?: string;
}

export interface UpdateContract {
	title?: string;
	representative_Id?: string;
	room_id?: string;
	status?: ContractStatus;
	image?: string;
	contractFile?: string;
}

export interface SearchFilters {
	title?: string;
	room_id?: string;
	status?: ContractStatus;
}

export interface GetUsersParams {
	page: number;
	limit: number;
	search?: string;
	filters?: any;
}

export interface ContractResponse {
	_id: string;
	title?: string;
	representative_Id?: string;
	room_id?: string;
	status?: ContractStatus;
	image?: string;
	contractFile?: string;
}
