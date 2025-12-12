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

			return sendSuccess(res, result, "Lấy danh sách hóa đơn thành công");
		} catch (error) {
			logError("Lỗi lấy danh sách hóa đơn:", error);
			next(ApiError.badRequest("Lỗi lấy danh sách hóa đơn"));
		}
	};

	CreateBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const CreateBillData: CreateRequest = req.body;
			const result = await this.billService.createBill(CreateBillData);

			return sendSuccess(res.status(201), result, "Tạo hóa đơn thành công");
		} catch (error) {
			logError("Lỗi tạo hóa đơn:", error);
			next(ApiError.badRequest("Lỗi tạo hóa đơn"));
		}
	};

	UpdateBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const UpdateBillData: UpdateRequest = req.body;
			const result = await this.billService.updateBill(id, UpdateBillData);

			return sendSuccess(res.status(201), result, "Cập nhập hóa đơn thành công");
		} catch (error) {
			logError("Lỗi cập nhập hóa đơn:", error);
			next(ApiError.badRequest("Lỗi cập nhập hóa đơn"));
		}
	};

	DeleteBill = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const result = await this.billService.deleteBill(id);

			return sendSuccess(res.status(201), result, "Xoá hóa đơn thành công");
		} catch (error) {
			logError("Lỗi xóa hóa đơn:", error);
			next(ApiError.badRequest("Lỗi xóa hóa đơn"));
		}
	};

	/* ----- Find ----- */

	FindUpdateStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const { status } = req.body;
			const result = await this.billService.findUpdateStatus(id, status);

			return sendSuccess(res.status(201), result, "Cập nhập trạng thái hóa đơn thành công");
		} catch (error) {
			logError("Lỗi cập nhập trạng thái theo hóa đơn:", error);
			next(ApiError.badRequest("Lỗi cập nhập trạng thái theo hóa đơn"));
		}
	};

	FindBillById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const result = await this.billService.findBillById(id);

			return sendSuccess(res.status(201), result, "lấy hóa đơn theo Id thành công");
		} catch (error) {
			logError("Lỗi tìm hóa đơn theo Id:", error);
			next(ApiError.badRequest("Lỗi tìm hóa đơn theo Id"));
		}
	};

	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method
}