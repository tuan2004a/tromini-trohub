import mongoose, { Document, Model, Schema } from "mongoose";
import { RoomStatus } from "./room.type";
import mongoosePaginate from "mongoose-paginate-v2";

export interface RoomModel extends Document {
	_id: string;
	type: string;
	name: string;
	status?: RoomStatus;
	price: number;
	tag?: string[];
	areaSize?: number;
	images?: string[];
	description: string;
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
		tag: [
			{
				type: String,
				default: [],
			},
		],
		areaSize: {
			type: Number,
		},
		images: {
			type: [String],
		},
		description: {
			type: String,
		},
	},
	{ timestamps: true }
);

roomShema.plugin(mongoosePaginate);
export const Room = mongoose.model<RoomModel, mongoose.PaginateModel<RoomModel>>("Room", roomShema);
