import mongoose from "mongoose";
import { User, UserModel, IUserSession } from "./user.model";
import { UserSearchFilters, UserType } from "./user.type";
import { UserDto } from "./user.dto";
import { PaginationResult } from "@/utils/pagination";

export class UserRepository {
	constructor() {}

	async getAllUsersRepo(page: number = 1, limit: number = 10, filters: UserSearchFilters = {}): Promise<PaginationResult<UserModel>> {
		const query = this.buildSearchQuery(filters);

		const pagination = {
			page,
			limit,
			sort: { createdAt: -1 },
		};

		const result: any = await User.paginate(query, pagination);

		return result;
	}

	async findUserByPhone(phone: string): Promise<UserModel | null> {
		return User.findOne({ phone });
	}

	async createUser(userDataRepo: UserType): Promise<UserModel | undefined> {
		const user = new User(userDataRepo);
		return await user.save();
	}

	async findUserById(id: string): Promise<UserModel | null> {
		return await User.findById({ id });
	}

	/* ----- Session User ----- */

	async findUserBySessionId(sessionId: string): Promise<UserModel | null> {
		return User.findOne({
			"sessions.session_id": sessionId,
		})
			.select("+sessions email role isActive configs")
			.lean<UserModel | null>();
	}

	async createSessionUser(userId: string, session: IUserSession): Promise<string | void> {
		if (!this.isValidObjectId(userId)) return;
		await User.findByIdAndUpdate(
			userId,
			{
				$push: {
					sessions: session,
				},
			},
			{ new: false, runValidators: true }
		);
	}

	async updateUserSession(userId: string, sessionId: string, updates: Partial<IUserSession>): Promise<void | null | undefined> {
		if (!this.isValidObjectId(userId)) return;
		const $set: Record<string, unknown> = {};

		if (updates.hashed_refresh_token) {
			$set["sessions.$.hashed_refresh_token"] = updates.hashed_refresh_token;
		}
		if (updates.expires_at) {
			$set["sessions.$.expires_at"] = updates.expires_at;
		}
		if (Object.keys($set).length === 0) return;
		await User.updateOne({ _id: userId, "sessions.session_id": sessionId }, { $set });
	}

	async removeUserSession(userId: string, sessionId: string): Promise<void | null | undefined> {
		await User.updateOne(
			{
				_id: userId,
			},
			{ $pull: { sessions: { session_id: sessionId } } }
		);
	}

	// ✅ Private method
	private buildSearchQuery(filters: UserSearchFilters): any {
		const query: any = { isActive: true };

		if (filters.search) {
			const searchRegex = new RegExp(filters.search, "i");
			query.$or = [{ "configs.user.name": searchRegex }, { email: searchRegex }];
		}

		return query;
	}

	private isValidObjectId(id: string): boolean {
		return mongoose.Types.ObjectId.isValid(id);
	}
}
