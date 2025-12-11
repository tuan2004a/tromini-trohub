import { sendSuccess } from "@/utils/response";
import { logError } from "@/utils/logger";
import { ApiError } from "@/utils/ApiError";
import { Request, Response, NextFunction } from "express";
import { BillService } from "./bill.service";
import { CreateRequest, UpdateRequest } from "./bill.dto";

export class BillController {
	private readonly billService: BillService;

	constructor() {
		this.billService = new BillService();
	}

	/* ----- CRUD ----- */

	GetAllBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { page = "1", limit = "10", search, filters } = req.query;
			const result = await this.billService.getAllBill({
				page: parseInt(page as string, 10),
				limit: parseInt(limit as string, 10),
				search: search as string | undefined,
				filters: filters ? JSON.parse(filters as string) : undefined,
			});

			return sendSuccess(res, result, "Lấy danh sách hợp đồng thành công");
		} catch (error) {
			logError("Lỗi lấy danh sách hợp đồng:", error);
			next(ApiError.badRequest("Lỗi lấy danh sách hợp đồng"));
		}
	};

	CreateBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const CreateBillData: CreateRequest = req.body;
			const result = await this.billService.createBill(CreateBillData);

			return sendSuccess(res.status(201), result, "Tạo hợp đồng thành công");
		} catch (error) {
			logError("Lỗi tạo hợp đồng:", error);
			next(ApiError.badRequest("Lỗi tạo hợp đồng"));
		}
	};

	UpdateBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const UpdateBillData: UpdateRequest = req.body;
			const result = await this.billService.updateBill(id, UpdateBillData);

			return sendSuccess(res.status(201), result, "Cập nhập hợp đồng thành công");
		} catch (error) {
			logError("Lỗi cập nhập hợp đồng:", error);
			next(ApiError.badRequest("Lỗi cập nhập hợp đồng"));
		}
	};

	DeleteBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const result = await this.billService.deleteBill(id);

			return sendSuccess(res.status(201), result, "Xoá hợp đồng thành công");
		} catch (error) {
			logError("Lỗi xóa hợp đồng:", error);
			next(ApiError.badRequest("Lỗi xóa hợp đồng"));
		}
	};

	/* ----- Find ----- */
	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method
}