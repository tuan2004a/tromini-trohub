import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

export class UserController {
	private readonly userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {

			const { page = "1", limit = "10", search, filters } = req.query;

			const result = await this.userService.getAllUsers({
				page: parseInt(page as string, 10),
				limit: parseInt(limit as string, 10),
				search: search as string | undefined,
				filters: filters ? JSON.parse(filters as string) : undefined,
			});

			res.status(200).json({
				status: "success",
				message: "Lấy danh sách người dùng thành công",
				...result,
			});

		} catch (error) {
			console.log("Error creating user:", error);
			next(error);
			throw error;
		}
	};
}