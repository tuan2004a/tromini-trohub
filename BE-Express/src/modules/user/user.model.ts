import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { UserRole, UserType } from "./user.type";

export interface UserModel extends Document {
	_id: string;
	phone: string;
	hashedPassword: string;
	displayName: string;
	role?: UserRole;
	sessions?: IUserSession[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IUserSession {
	readonly session_id: string;
	readonly hashed_refresh_token: string;
	readonly expires_at: Date;
	readonly created_at: Date;
}


const userSchema = new Schema(
	{
		phone: {
			type: String,
			required: [true, "Số điện thoại không được để trống"],
			unique: [true, "Số điện thoại đã tồn tại"],
			trim: true,
			lowercase: true,
			sparse: true,
		},
		hashedPassword: {
			type: String,
			required: [true, "Mật khẩu không được để trống"],
			minlength: [5, "Mật khẩu phải có ít nhất 5 ký tự"],
		},
		displayName: {
			type: String,
			required: true,
			trim: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		role: {
			type: String,
			enum: Object.values(UserRole),
			default: UserRole.USER,
			index: true,
		},
		sessions: {
			type: [
				{
					session_id: { type: String, required: true },
					hashed_refresh_token: { type: String, required: true },
					expires_at: { type: Date, required: true },
					created_at: { type: Date, default: Date.now },
				},
			],
			default: [],
			select: false,
		},
	},
	{ timestamps: true }
);

export const User = mongoose.model<UserModel>("User", userSchema);