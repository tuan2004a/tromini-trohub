import { IUserSession, User, UserModel } from "./user.model";
import { UserRepository } from "./user.repository";
import { UserType, GetUsersParams } from "./user.type";
import { UserDto, PaginatedUserDto } from "./user.dto";

export class UserService {
	private readonly userRepository: UserRepository;

	constructor() {
		this.userRepository = new UserRepository();
	}

	/* ----- CRUD User ----- */

	async getAllUsers(params: GetUsersParams): Promise<PaginatedUserDto> {
		const { page, limit, search, filters } = params;
		const result = await this.userRepository.getAllUsersRepo(page, limit, { search, ...filters });
		return {
			...result,
			docs: result.docs.map((u) => ({
				id: u._id.toString(),
				phone: u.phone,
				displayName: u.displayName,
				role: u.role,
			})),
		};
	}

	async createUser(userData: UserType): Promise<UserModel | undefined | null> {
		try {
			//tìm số điện thoại đã tồn tại hay chưa
			const findPhone = await this.findUserByPhone(userData.phone);
			if (findPhone) {
				throw new Error("Không tìm thấy số điện thoại");
			}

			//tạo mới user
			return await this.userRepository.createUser(userData);
		} catch (error) {
			console.log("lỗi khi tạo User", error);
			throw error;
		}
	}

	/* ----- Get Find ----- */

	async findUserByPhone(phone: string): Promise<UserModel | null> {
		return await this.userRepository.findUserByPhone(phone);
	}

	async findUserById(id: string): Promise<UserModel | null> {
		return await this.userRepository.findUserById(id);
	}

	/* ----- Session User ----- */

	async findUserBySessionId(sessionId: string): Promise<UserModel | null> {
		return await this.userRepository.findUserBySessionId(sessionId);
	}

	async createSessionUser(userId: string, session: IUserSession): Promise<string | void> {
		return await this.userRepository.createSessionUser(userId, session);
	}

	async updateUserSession(userId: string, sessionId: string, updates: Partial<IUserSession>): Promise<void | null | undefined> {
		return this.userRepository.updateUserSession(userId, sessionId, updates);
	}

	async removeUserSession(userId: string, sessionId: string): Promise<void | null> {
		return await this.userRepository.removeUserSession(userId, sessionId);
	}

	// 🛡️ Private method
	private mapToResponseDto(user: UserModel): UserDto {
		return {
			id: user._id.toString(),
			phone: user.phone,
			displayName: user.displayName,
			// hashedPassword: user.hashedPassword,
			role: user.role,
		};
	}
}