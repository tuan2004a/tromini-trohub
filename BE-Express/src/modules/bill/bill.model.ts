import mongoose, { Document, Model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { BillStatus } from "./bill.type";

export interface BillModel extends Document {
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

export interface UsageTypes {
	image: string;
	old: string;
	new: string;
	usage: string;
	unit_price: string,
	total: string;
}

const billSchema = new Schema(
	{
		billCode: {
			type: String,
			unique: true,
		},
		room_Id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Room",
			required: true,
		},
		service_Id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Service",
		},
		electricity: {
			type: [
				{
					image: { type: String },
					old: { type: String, required: true }, // Chỉ số cũ
					new: { type: String, required: true }, // Chỉ số mới
					usage: { type: String, required: true }, // Số lượng tiêu thụ
					unit_price: { type: String, required: true }, // đơn giá / kWh
					total: { type: String, required: true }, // tổng tiền
				},
			],
			default: [],
			required: true,
		},
		water: {
			type: [
				{
					image: { type: String },
					old: { type: String, required: true }, // Chỉ số cũ
					new: { type: String, required: true }, // Chỉ số mới
					usage: { type: String, required: true }, // Số lượng tiêu thụ
					unit_price: { type: String, required: true }, // đơn giá / kWh
					total: { type: String, required: true }, // tổng tiền
				},
			],
			default: [],
			required: true,
		},
		note: {
			type: String,
			maxLength: 100,
		},
		status: {
			type: String,
			enum: Object.values(BillStatus),
			default: BillStatus.UNPAID,
		},
		paymentMethod: {
			type: mongoose.Schema.Types.ObjectId,
			unique: true,
		},
		total: {
			type: String,
		},
	},
	{ timestamps: true }
);

billSchema.plugin(mongoosePaginate);
export const Contract = mongoose.model<BillModel, mongoose.PaginateModel<BillModel>>("Bill", billSchema);