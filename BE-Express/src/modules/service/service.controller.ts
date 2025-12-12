import { Service } from './service.model';
import { sendSuccess } from "@/utils/response";
import { logError } from "@/utils/logger";
import { ApiError } from "@/utils/ApiError";
import { Request, Response, NextFunction } from "express";
import { ServiceService } from './service.service';
import { CreateRequest, UpdateRequest } from './service.dto';

export class ServiceController {
	private readonly serviceService: ServiceService;

	constructor() {
		this.serviceService = new ServiceService();
	}

	GetAllService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { page = "1", limit = "10", search, filters } = req.query;
			const result = await this.serviceService.getAllService({
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

	CreateService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const CreateServiceData: CreateRequest = req.body;
			const result = await this.serviceService.createService(CreateServiceData);

			return sendSuccess(res.status(201), result, "Tạo hợp đồng thành công");
		} catch (error) {
			logError("Lỗi tạo hợp đồng:", error);
			next(ApiError.badRequest("Lỗi tạo hợp đồng"));
		}
	};

	UpdateService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const UpdateServiceData: UpdateRequest = req.body;
			const result = await this.serviceService.updateService(id, UpdateServiceData);

			return sendSuccess(res.status(201), result, "Cập nhập hợp đồng thành công");
		} catch (error) {
			logError("Lỗi cập nhập hợp đồng:", error);
			next(ApiError.badRequest("Lỗi cập nhập hợp đồng"));
		}
	};

	DeleteService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			const { id } = req.params;
			const result = await this.serviceService.deleteService(id);

			return sendSuccess(res.status(201), result, "Xoá hợp đồng thành công");
		} catch (error) {
			logError("Lỗi xóa hợp đồng:", error);
			next(ApiError.badRequest("Lỗi xóa hợp đồng"));
		}
	};
}