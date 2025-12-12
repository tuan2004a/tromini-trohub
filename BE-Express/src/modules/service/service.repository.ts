import { PaginationResult } from "@/utils/pagination";
import mongoose from "mongoose";
import { CreateService, SearchFilters, UpdateService } from "./service.type";
import { ServiceModel, Service } from "./service.model";

export class ServiceRepository {
	constructor() {}

	/* ----- CRUD ----- */

	async getAllServiceRepo(page: number = 1, limit: number = 10, filters: SearchFilters): Promise<PaginationResult<ServiceModel>> {
		const query = this.buildSearchQuery(filters);

		const pagination = this.paginationOptions(page, limit);

		const result = await Service.paginate(query, pagination);

		return result;
	}

	async createService(CreateData: CreateService): Promise<ServiceModel> {
		return await Service.create(CreateData);
	}

	async updateService(id: string, UpdateData: UpdateService): Promise<ServiceModel | undefined | null> {
		if (!this.isValidObjectId(id)) return;
		return Service.findByIdAndUpdate(id, UpdateData, { new: true, runValidators: true });
	}

	async deleteService(id: string): Promise<ServiceModel | undefined | null> {
		if (!this.isValidObjectId(id)) return null;
		return await Service.findByIdAndDelete(id);
	}

	/* ----- Find ----- */
	/* ----- GET ----- */
	/* ----- Other ----- */

	private isValidObjectId(id: string): boolean {
		return mongoose.Types.ObjectId.isValid(id);
	}

	private buildSearchQuery(filters: SearchFilters): Record<string, any> {
		const query: Record<string, any> = {};

		if (filters.name && filters.name.trim() !== "") {
			query.name = { $regex: filters.name.trim(), $options: "i" };
		}

		return query;
	}

	private paginationOptions(page: number, limit: number) {
		return {
			page,
			limit,
			sort: { createdAt: -1 },
			populate: [
				{ path: "representative_Id", select: "displayName email" },
				{ path: "room_id", select: "name" },
			],
		};
	}
}