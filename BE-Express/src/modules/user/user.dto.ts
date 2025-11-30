export interface UserDto {
	id: string;
	phone: string;
	hashedPassword: string;
	displayName: string;
	role?: "user" | "admin" | "super_admin";
}