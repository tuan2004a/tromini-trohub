export enum UserRole {
	USER = "user",
	ADMIN = "admin",
	SUPER_ADMIN = "super_admin",
}

export enum UserGender {
	MALE = "male",
	FEMALE = "female",
	OTHER = "other",
}

export interface UserType {
	_id?: string;
	phone: string;
	hashedPassword: string;
	displayName: string;
	role?: UserRole;
}

export interface UserSearchFilters {
	role?: UserRole;
	search?: string;
}

export interface GetUsersParams {
	page: number;
	limit: number;
	search?: string;
	filters?: any;
}