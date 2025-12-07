import mongoose, { Document, Model, Schema } from "mongoose";
import { UserRole } from "./user.type";
import mongoosePaginate from "mongoose-paginate-v2";

export interface UserModel extends Document {
	_id: string;
	phone: string;
	hashedPassword: string;
	displayName: string;
	contractId: string;
	roomId: string;
	role?: UserRole;
	sessions?: IUserSession[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IUserSession {
	readonly session_id: string;
	readonly hashed_refresh_token: string;
	readonly device_info?: string;
	readonly expires_at: Date;
	readonly created_at: Date;
}

// export interface UserModelPaginate<T> extends Model<T> {
// 	paginate: (query: any, options: any) => Promise<any>;
// }

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
		roomId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Room",
		},
		// Hợp đồng
		contractId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Contract",
			default: null,
		},
		sessions: {
			type: [
				{
					session_id: { type: String, required: true },
					hashed_refresh_token: { type: String, required: true },
					device_info: { type: String, default: "unknown", trim: true },
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

userSchema.plugin(mongoosePaginate);
export const User = mongoose.model<UserModel, mongoose.PaginateModel<UserModel>>("User", userSchema);
