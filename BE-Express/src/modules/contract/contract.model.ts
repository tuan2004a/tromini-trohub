import mongoose, { Document, Model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import {ContractStatus} from "./contract.type";

export interface ContractModel extends Document {
	_id: string;
	title: string;
	representative_Id: string;
	room_id: string;
	status: ContractStatus;
	image: string;
	contractFile?: string;
}

const contractSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			maxlength: 100,
		},
		representative_Id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		room_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Room",
			required: true,
		},
		image: {
			type: String,
		},
		status: {
			type: String,
			enum: Object.values(ContractStatus),
			default: ContractStatus.DEPOSIT_PAID,
		},
		contractFile: {
			type: String, // link file
			required: false,
		},
	},
	{ timestamps: true }
);

contractSchema.plugin(mongoosePaginate);
export const Contract = mongoose.model<ContractModel, mongoose.PaginateModel<ContractModel>>("Contract", contractSchema);