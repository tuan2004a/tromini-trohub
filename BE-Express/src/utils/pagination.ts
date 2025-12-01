export interface PaginationMeta {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	perPage: number;
	hasNext: boolean;
	hasPrev: boolean;
}

export interface PaginationResult<T> {
	data: T[];
	pagination: PaginationMeta;
}

export interface PaginationOptions {
	page?: number;
	limit?: number;
}


export class pagination{
    
}