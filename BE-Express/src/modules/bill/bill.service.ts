import { ApiError } from "@/utils/ApiError";
import { logError } from "@/utils/logger";
import { BillRepository } from "./bill.repository";
import { BillResponse, CreateRequest, PaginatedBillDto, UpdateRequest } from "./bill.dto";
import { GetUsersParams } from "./bill.type";
import { BillModel } from "./bill.model";

export class BillService {
	private readonly billRepository: BillRepository;

	constructor() {
		this.billRepository = new BillRepository();
	}

	/* ----- CRUD ----- */

	async getAllBill(params: GetUsersParams): Promise<PaginatedBillDto> {
		const { page, limit, search, filters } = params;
		const result = await this.billRepository.getAllBillRepo(page, limit, filters);

		return {
			...result,
			docs: result.docs.map((u) => ({
				_id: u._id.toString(),
				billCode: u.billCode,
				room_Id: u.room_Id,
				service_Id: u.service_Id,
				electricity: u.electricity,
				water: u.water,
				note: u.note,
				status: u.status,
				total: u.total,
			})),
		};
	}

	async createBill(CreateData: CreateRequest): Promise<BillResponse> {
		try {
			const bill = await this.billRepository.createBill(CreateData);

			return this.formatBillResponse(bill);
		} catch (error) {
			logError("Service-Bill:", error);
			throw ApiError.internal("Lỗi tạo hợp đồng");
		}
	}

	async updateBill(id: string, UpdateData: UpdateRequest): Promise<BillResponse> {
		try {
			const bill = await this.billRepository.updateBill(id, UpdateData);
			if (!bill) {
				throw ApiError.notFound("Không tìm hợp đồng");
			}

			return this.formatBillResponse(bill);
		} catch (error) {
			logError("Service-Bill:", error);
			throw ApiError.internal("Lỗi cập nhập hợp đồng");
		}
	}

	async deleteBill(id: string): Promise<BillResponse> {
		try {
			const bill = await this.billRepository.deleteBill(id);
			if (!bill) {
				throw ApiError.notFound("Không tìm hợp đồng");
			}

			return this.formatBillResponse(bill);
		} catch (error) {
			logError("Service-Bill: ", error);
			throw ApiError.internal("Lỗi xóa hợp đồng");
		}
	}

	/* ----- Find ----- */
	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method
	private formatBillResponse(bill: BillModel): BillResponse {
		return {
			_id: bill._id.toString(),
			billCode: bill.billCode,
			room_Id: bill.room_Id,
			service_Id: bill.service_Id,
			electricity: bill.electricity,
			water: bill.water,
			note: bill.note,
			status: bill.status,
			total: bill.total,
		};
	}
}