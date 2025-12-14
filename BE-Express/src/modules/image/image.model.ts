import mongoose, { Document, Model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import { ImageStatus, ImageTypes } from "./image.type";

export interface ImageModel extends Document {
	_id: any;
	filename: string;
	originalFilename: string;
	mimeType: string;
	originalSize: number;
	displayUrl: string;
	imgbbId: string;
	deleteUrl: string;
	status: ImageStatus;
	type: ImageTypes;
	uploadedBy: mongoose.Types.ObjectId;
	metadata?: {
		width?: number;
		height?: number;
		format?: string;
		colorSpace?: string;
		hasAlpha?: boolean;
	};
	processingError?: string;
	createdAt: Date;
	updatedAt: Date;
}

const imageSchema = new Schema(
	{
		filename: {
			type: String,
			required: true,
			trim: true,
			index: true,
		},
		originalFilename: {
			type: String,
			required: true,
			trim: true,
		},
		mimeType: {
			type: String,
			required: true,
			enum: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
			index: true,
		},
		originalSize: {
			type: Number,
			required: true,
			min: 0,
		},
		displayUrl: {
			type: String,
			required: true,
			trim: true,
			default: "processing",
		},
		imgbbId: {
			type: String,
			required: true,
			trim: true,
			index: true,
			default: "processing",
		},
		deleteUrl: {
			type: String,
			required: true,
			trim: true,
			default: "processing",
		},
		status: {
			type: String,
			enum: Object.values(ImageStatus),
			default: ImageStatus.UPLOADING,
			index: true,
		},
		types: {
			type: String,
			enum: Object.values(ImageTypes),
			default: ImageTypes.IMAGES,
			index: true,
		},
		uploadedBy: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true,
		},
		metadata: {
			width: Number,
			height: Number,
			format: String,
			colorSpace: String,
			hasAlpha: Boolean,
		},
		processingError: {
			type: String,
			trim: true,
		},
	},
	{ timestamps: true }
);

export const Image = mongoose.model<ImageModel, mongoose.PaginateModel<ImageModel>>("Image", imageSchema);