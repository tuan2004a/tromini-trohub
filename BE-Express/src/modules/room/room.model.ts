import mongoose, { Document, Model, Schema } from "mongoose";
import { RoomStatus } from "./room.type";
import mongoosePaginate from "mongoose-paginate-v2";

export interface roomModel extends Document {
	_id: string;
	name: string;
	type: string;
	status: string;
	price: number;
	area: number;
	images: string[];
	description: string;
	representativeId: string;
	members: string[];
	contractId: string | null;
	createdAt: Date;
	updatedAt: Date;
}

const roomShema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Số phòng không được để trống"],
			unique: [true, "Số phòng đã tồn tại"],
			trim: true,
			sparse: true,
		},
		// Loại phòng
		type: {
			type: String,
		},
		// Trạng thái phòng
		status: {
			type: String,
			enum: Object.values(RoomStatus),
			default: RoomStatus.AVAILABLE,
		},
		price: {
			type: Number,
			default: 0,
			trim: true,
			required: [true, "Giá phòng không được để trống"],
		},
		area: {
			type: Number,
		},
		images: {
			type: [String],
		},
		description: {
			type: String,
		},
        //Người đại diện phòng thuê
		representativeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		//Thành viên trong phòng
		members: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		// Hợp đồng
		contractId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Contract",
			default: null,
		},
	},
	{ timestamps: true }
);

roomShema.plugin(mongoosePaginate);
export const Room = mongoose.model<roomModel, mongoose.PaginateModel<roomModel>>("Room", roomShema);