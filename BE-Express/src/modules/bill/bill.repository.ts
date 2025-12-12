import { PaginationResult } from "@/utils/pagination";
import mongoose from "mongoose";
import { BillModel, Bill } from "./bill.model";
import { CreateBill, SearchFilters, UpdateBill } from "./bill.type";

export class BillRepository {
	constructor() {}

	/* ----- CRUD ----- */

	async getAllBillRepo(page: number = 1, limit: number = 10, filters: SearchFilters): Promise<PaginationResult<BillModel>> {
		const query = this.buildSearchQuery(filters);

		const pagination = this.paginationOptions(page, limit);

		const result = await Bill.paginate(query, pagination);

		return result;
	}

	async createBill(CreateData: CreateBill): Promise<BillModel> {
		return await Bill.create(CreateData);
	}

	async updateBill(id: string, UpdateData: UpdateBill): Promise<BillModel | undefined | null> {
		if (!this.isValidObjectId(id)) return;
		return Bill.findByIdAndUpdate(id, UpdateData, { new: true, runValidators: true });
	}

	async deleteBill(id: string): Promise<BillModel | undefined | null> {
		if (!this.isValidObjectId(id)) return null;
		return await Bill.findByIdAndDelete(id);
	}

	/* ----- Find ----- */

	async findUpdateStatus(id: string, status: string): Promise<BillModel | undefined | null> {
		if (!this.isValidObjectId(id)) return null;
		return await Bill.findByIdAndUpdate(id, { status }, { new: true });
	}

	async findBillById(id: string): Promise<BillModel | undefined | null> {
		if (!this.isValidObjectId(id)) return null;
		return await Bill.findById(id).lean<BillModel>().exec();
	}

	/* ----- GET ----- */
	/* ----- Other ----- */

	private isValidObjectId(id: string): boolean {
		return mongoose.Types.ObjectId.isValid(id);
	}

	private buildSearchQuery(filters: SearchFilters): Record<string, any> {
		const query: Record<string, any> = {};

		if (filters.dayTime && filters.dayTime.trim() !== "") {
			query.dayTime = { $regex: filters.dayTime.trim(), $options: "i" };
		}

		if (filters.room_id && filters.room_id.trim() !== "") {
			query.tags = { $in: [filters.room_id.trim()] };
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