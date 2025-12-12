import { ApiError } from "@/utils/ApiError";
import { logError } from "@/utils/logger";
import { Service, ServiceModel } from "./service.model";
import { ServiceRepository } from "./service.repository";
import { CreateRequest, PaginatedServiceDto, ServiceResponse, UpdateRequest } from "./service.dto";
import { GetUsersParams } from "./service.type";

export class ServiceService {
	private readonly serviceRepository: ServiceRepository;

	constructor() {
		this.serviceRepository = new ServiceRepository();
	}

	async getAllService(params: GetUsersParams): Promise<PaginatedServiceDto> {
		const { page, limit, search, filters } = params;
		const result = await this.serviceRepository.getAllServiceRepo(page, limit, filters);

		return {
			...result,
			docs: result.docs.map((u) => ({
				_id: u._id.toString(),
				name: u.name,
				price: u.price,
				isActive: u.isActive,
				image: u.image,
				note: u.note,
				types: u.types,
			})),
		};
	}

	async createService(CreateData: CreateRequest): Promise<ServiceResponse> {
		try {
			const service = await this.serviceRepository.createService(CreateData);

			return this.formatServiceResponse(service);
		} catch (error) {
			logError("Service-Service:", error);
			throw ApiError.internal("Lỗi tạo dịch vụ");
		}
	}

	async updateService(id: string, UpdateData: UpdateRequest): Promise<ServiceResponse> {
		try {
			const service = await this.serviceRepository.updateService(id, UpdateData);
			if (!service) {
				throw ApiError.notFound("Không tìm dịch vụ");
			}

			return this.formatServiceResponse(service);
		} catch (error) {
			logError("Service-Service:", error);
			throw ApiError.internal("Lỗi cập nhập dịch vụ");
		}
	}

	async deleteService(id: string): Promise<ServiceResponse> {
		try {
			const service = await this.serviceRepository.deleteService(id);
			if (!service) {
				throw ApiError.notFound("Không tìm dịch vụ");
			}

			return this.formatServiceResponse(service);
		} catch (error) {
			logError("Service-Service: ", error);
			throw ApiError.internal("Lỗi xóa dịch vụ");
		}
	}

	/* ----- Find ----- */
	/* ----- GET ----- */
	/* ----- Other ----- */

	private formatServiceResponse(service: ServiceModel): ServiceResponse {
		return {
			_id: service._id.toString(),
			name: service.name,
			price: service.price,
			isActive: service.isActive,
			image: service.image,
			note: service.note,
			types: service.types,
		};
	}
}
