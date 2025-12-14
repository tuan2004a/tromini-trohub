import { ApiError } from "@/utils/ApiError";
import { logError } from "@/utils/logger";
import { ImageRepository } from "./image.repository";
import { ImageResponse } from "./image.type";
import { CreateRequest, UpdateRequest } from "./image.dto";
import { ImageModel } from "./image.model";

export class ImageService {
	private readonly imageRepository: ImageRepository;

	constructor() {
		this.imageRepository = new ImageRepository();
	}

	/* ----- CRUD ----- */

	async createImage(CreateData: CreateRequest): Promise<ImageResponse> {
		try {
			const image = await this.imageRepository.createImage(CreateData);

			return this.formatImageResponse(image);
		} catch (error) {
			logError("Service-Contract:", error);
			throw ApiError.internal("Lỗi tạo hợp đồng");
		}
	}

	async updateImage(id: string, updateData: UpdateRequest): Promise<ImageResponse> {
		try {
			const image = await this.imageRepository.updateImage(id, updateData);

			if (!image) {
				throw ApiError.notFound("Không tìm thấy hình ảnh");
			}

			return this.formatImageResponse(image);
		} catch (error) {
			logError("Service-Image:", error);
			throw ApiError.internal("Lỗi cập nhật hình ảnh");
		}
	}

	async deleteImage(id: string): Promise<ImageResponse> {
		try {
			const image = await this.imageRepository.deleteImage(id);

			if (!image) {
				throw ApiError.notFound("Không tìm thấy hình ảnh");
			}

			return this.formatImageResponse(image);
		} catch (error) {
			logError("Service-Image:", error);
			throw ApiError.internal("Lỗi xóa hình ảnh");
		}
	}

	/* ----- Find ----- */
	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method

	private formatImageResponse(image: ImageModel): ImageResponse {
		return {
			_id: image._id.toString(),
			filename: image.filename,
			originalFilename: image.originalFilename,
			mimeType: image.mimeType,
			originalSize: image.originalSize,
			displayUrl: image.displayUrl,
			imgbbId: image.imgbbId,
			deleteUrl: image.deleteUrl,
			status: image.status,
			type: image.type,
			uploadedBy: image.uploadedBy,
			metadata: {
				width: image.metadata?.width,
				height: image.metadata?.height,
				format: image.metadata?.format,
				colorSpace: image.metadata?.colorSpace,
				hasAlpha: image.metadata?.hasAlpha,
			},
			processingError: image.processingError,
		};
	}
}