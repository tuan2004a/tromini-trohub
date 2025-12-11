// loại dịch vụ
export enum ServiceTypes {
	FIXED = "Cố định",
	PER_PERSON = "Tính theo người",
	PER_ROOM = "Tính theo phòng",
}

export interface ServiceType {
	_id: string;
	name: string;
	price: number;
	isActive: boolean;
	image: string;
	note: string;
	types: ServiceTypes;
}

export interface SearchFilters {
	name: string;
}

export interface GetUsersParams {
	page: number;
	limit: number;
	search?: string;
	filters?: any;
}

export interface CreateService {}

export interface UpdateService {}
