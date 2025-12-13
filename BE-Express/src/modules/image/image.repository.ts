import { PaginationResult } from "@/utils/pagination";
import mongoose from "mongoose";
import { ImageModel, Image } from "./image.model";
import { CreateImage, UpdateImage } from "./image.type"

export class ImageRepository {
	constructor() {}

	/* ----- CRUD ----- */

	async createImage(CreateData: CreateImage): Promise<ImageModel> {
		return await Image.create(CreateData);
	}

	async updateImage(id: string, UpdateData: UpdateImage): Promise<ImageModel | any> {
		if (!this.isValidObjectId(id)) return null;
		return await Image.findByIdAndUpdate(id, UpdateData, { new: true, runValidators: true });
	}

	async deleteImage(id: string): Promise<ImageModel | any> {
		if (!this.isValidObjectId(id)) return null;
		return await Image.findByIdAndDelete(id);
	}

	/* ----- Find ----- */

	async findById(id: string): Promise<ImageModel | any> {
		if (!this.isValidObjectId(id)) return null;
		return await Image.findById(id).lean<ImageModel>().exec();
	}

	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method
	private isValidObjectId(id: string): boolean {
		return mongoose.Types.ObjectId.isValid(id);
	}
}