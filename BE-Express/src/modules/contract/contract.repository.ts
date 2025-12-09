import { PaginationResult } from "@/utils/pagination";
import mongoose from "mongoose";
import { Contract, ContractModel } from "./contract.model";
import { CreateContract, SearchFilters, UpdateContract } from "./contract.type";

export class ContractRepository {
	constructor() {}

	/* ----- CRUD ----- */

	async getAllContractRepo(page = 1, limit = 1, filters: SearchFilters): Promise<PaginationResult<ContractModel>> {
		const query = this.buildSearchQuery(filters);

		const pagination = this.paginateRooms(page, limit);

		const result = await Contract.paginate(query, pagination);

		return result;
	}

	async createConTract(CreateData: CreateContract): Promise<ContractModel> {
		return await Contract.create(CreateData);
	}

	async updateContract(id: string, UpdateData: UpdateContract): Promise<ContractModel | undefined | null> {
		if (!this.isValidObjectId(id)) return;
		return Contract.findByIdAndUpdate(id, UpdateData, { new: true, runValidators: true });
	}

	async deleteContract(id: string): Promise<ContractModel | undefined | null> {
		if (!this.isValidObjectId(id)) return null;
		return await Contract.findByIdAndDelete(id);
	}

	/* ----- Find ----- */

	async findUpdateStatus(id: string, status: string): Promise<ContractModel | undefined | null> {
		if (!this.isValidObjectId(id)) return null;
		return await Contract.findByIdAndUpdate(id, { status }, { new: true });
	}

	async findContractsByUser() {
		return await Contract.find().populate({ path: "partyA", select: "displayName" });
	}

	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method
	private isValidObjectId(id: string): boolean {
		return mongoose.Types.ObjectId.isValid(id);
	}

	private buildSearchQuery(filters: SearchFilters): Record<string, any> {
		const query: Record<string, any> = {};

		if (filters.title && filters.title.trim() !== "") {
			query.title = { $regex: filters.title.trim(), $options: "i" };
		}

		if (filters.status) {
			query.status = filters.status;
		}

		if (filters.room_id && Array.isArray(filters.room_id) && filters.room_id.length > 0) {
			query.tags = { $in: filters.room_id };
		}

		return query;
	}

	private paginateRooms(page: number = 1, limit: number = 10): Promise<ContractModel | null> {
		return Contract.paginate({}, { page, limit, sort: { createdAt: -1 } });
	}
}
