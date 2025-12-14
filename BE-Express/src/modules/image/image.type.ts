import mongoose from "mongoose";

export enum ImageStatus {
	UPLOADING = "Đang tải lên",
	PROCESSING = "Đang xử lý",
	COMPLETED = "Đã hoàn thành",
	FAILED = "Tải lên thất bại",
}

export enum ImageTypes {
	AVATAR = "avatar",
	ARTICLE = "article",
	IMAGES = "images",
	OLD_AVATAR = "old_avatar",
}

export interface ImageType {
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
}

export interface CreateImage {
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
}

export interface UpdateImage {
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
}

export interface ImageResponse {
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
}