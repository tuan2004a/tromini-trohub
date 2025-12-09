import { sendSuccess } from "@/utils/response";
import { logError } from "@/utils/logger";
import { ApiError } from "@/utils/ApiError";
import { ContractService } from "./contract.service";
import { Request, Response, NextFunction } from "express";
import { CreateRequest, UpdateRequest } from "./contract.dto";

export class ContractController {
	private readonly contractService: ContractService;

	constructor() {
		this.contractService = new ContractService();
	}

	/* ----- CRUD ----- */

	GetAllContracts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { page = "1", limit = "10", search, filters } = req.query;
			const result = await this.contractService.getAllContract({
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

	CreateContract = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const CreateContractData: CreateRequest = req.body;
			const result = await this.contractService.createContract(CreateContractData);

			return sendSuccess(res.status(201), result, "Tạo hợp đồng thành công");
		} catch (error) {
			logError("Lỗi tạo hợp đồng:", error);
			next(ApiError.badRequest("Lỗi tạo hợp đồng"));
		}
	};

	UpdateContract = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const UpdateContractData: UpdateRequest = req.body;
			const result = await this.contractService.updateContract(id, UpdateContractData);

			return sendSuccess(res.status(201), result, "Cập nhập hợp đồng thành công");
		} catch (error) {
			logError("Lỗi cập nhập hợp đồng:", error);
			next(ApiError.badRequest("Lỗi cập nhập hợp đồng"));
		}
	};

	DeleteContract = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const result = await this.contractService.deleteContract(id);

			return sendSuccess(res.status(201), result, "Xoá hợp đồng thành công");
		} catch (error) {
			logError("Lỗi xóa hợp đồng:", error);
			next(ApiError.badRequest("Lỗi xóa hợp đồng"));
		}
	};

	/* ----- Find ----- */

	FindUpdateStatus= async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			
		} catch (error) {
			logError("Lỗi cập nhập trạng thái theo hợp đồng:", error);
			next(ApiError.badRequest("Lỗi cập nhập trạng thái theo hợp đồng"));
		}
	}

	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method
}
