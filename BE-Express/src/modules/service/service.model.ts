import mongoose, { Document, Model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { ServiceTypes } from "./service.type";

export interface ServiceModel extends Document {
	_id: string;
	name: string;
	price: number;
	isActive: boolean;
	image: string;
	note: string;
	types: string
}

const serviceSchema = new Schema(
	{
		name: {
			type: String,
			require: true,
			minlength: [2, "ký tự quá ngắn"],
		},
		price: {
			type: Number,
			require: true,
			default: 0,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		image: {
			type: String,
		},
		note: {
			type: String,
		},
		types: {
			type: String, // loại dịch vụ
			enum: Object.values(ServiceTypes),
			required: true,
		},
	},
	{ timestamps: true }
);

serviceSchema.plugin(mongoosePaginate);
export const Contract = mongoose.model<ServiceModel, mongoose.PaginateModel<ServiceModel>>("Service", serviceSchema);
