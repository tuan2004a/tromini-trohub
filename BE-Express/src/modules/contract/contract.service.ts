import { ApiError } from "@/utils/ApiError";
import { logError } from "@/utils/logger";
import { ContractResponse, GetUsersParams } from "./contract.type";
import { ContractRepository } from "./contract.repository";
import { CreateRequest, PaginatedRoomDto, UpdateRequest } from "./contract.dto";
import { ContractModel } from "./contract.model";

export class ContractService {
	private readonly contractRepository: ContractRepository;

	constructor() {
		this.contractRepository = new ContractRepository();
	}

	/* ----- CRUD ----- */

	async getAllContract(params: GetUsersParams): Promise<PaginatedRoomDto> {
		const { page, limit, search, filters } = params;
		const result = await this.contractRepository.getAllContractRepo(page, limit, filters);

		return {
			...result,
			docs: result.docs.map((u) => ({
				_id: u._id.toString(),
				title: u.title,
				representative_Id: u.representative_Id,
				room_id: u.room_id,
				status: u.status,
				image: u.image,
				contractFile: u.contractFile,
			})),
		};
	}

	async createContract(CreateData: CreateRequest): Promise<ContractResponse> {
		try {
			const contract = await this.contractRepository.createConTract(CreateData);

			return this.formatContractResponse(contract);
		} catch (error) {
			logError("Service-Contract:", error);
			throw ApiError.internal("Lỗi tạo hợp đồng");
		}
	}

	async updateContract(id: string, UpdateData: UpdateRequest): Promise<ContractResponse> {
		try {
			const contract = await this.contractRepository.updateContract(id, UpdateData);
			if (!contract) {
				throw ApiError.notFound("Không tìm hợp đồng");
			}

			return this.formatContractResponse(contract);
		} catch (error) {
			logError("Service-Contract:", error);
			throw ApiError.internal("Lỗi cập nhập hợp đồng");
		}
	}

	async deleteContract(id: string): Promise<ContractResponse> {
		try {
			const contract = await this.contractRepository.deleteContract(id);
			if (!contract) {
				throw ApiError.notFound("Không tìm hợp đồng");
			}

			return this.formatContractResponse(contract);
		} catch (error) {
			logError("Service-Contract: ", error);
			throw ApiError.internal("Lỗi xóa hợp đồng");
		}
	}

	/* ----- Find ----- */

	async findUpdateStatus(id: string, status: string): Promise<ContractResponse> {
		try {
			const contract = await this.contractRepository.findUpdateStatus(id, status);
			if (!contract) {
				throw ApiError.notFound("Không tìm hợp đồng");
			}

			return this.formatContractResponse(contract);
		} catch (error) {
			logError("Service-Contract: ", error);
			throw ApiError.internal("Lỗi cập nhập status hợp đồng");
		}
	}

	async findContractById(id: string): Promise<ContractResponse | undefined> {
		try {
			const contract = await this.contractRepository.findContractById(id);
			if (!contract) {
				throw ApiError.notFound("Không tìm hợp đồng");
			}

			return this.formatContractResponse(contract);
		} catch (error) {
			logError("Service-Contract: ", error);
			throw ApiError.internal("Lỗi tìm hợp đồng theo Id");
		}
	}

	/* ----- GET ----- */
	/* ----- Other ----- */

	// 🛡️ Private method

	private formatContractResponse(contract: ContractModel): ContractResponse {
		return {
			_id: contract._id.toString(),
			title: contract.title,
			representative_Id: contract.representative_Id,
			room_id: contract.room_id,
			status: contract.status,
			image: contract.image,
			contractFile: contract.contractFile,
		};
	}
}
