import { ApiError } from "@/utils/ApiError";
import { logError } from "@/utils/logger";
import { ImageService } from "./image.service";

export class ImageController {
	private readonly contractRepository: ImageService;

	constructor() {
		this.contractRepository = new ImageService();
	}

	/* ----- CRUD ----- */

    
}