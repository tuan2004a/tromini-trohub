import { Request, Response, NextFunction } from "express";
import { UserService } from "./user.service";

export class UserController {
	private readonly userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		try {
			/*
			const page = parseInt(req.query.page as string) || 1;
			const limit = parseInt(req.query.limit as string) || 10;
			const search = req.query.search as string;
			const role = req.query.role as string;

			const filters: any = {};
			if (role) filters.role = role;

			const result = await this.userService.getAllUsers({
				page,
				limit,
				search,
				filters,
			});
			*/

			const { page = "1", limit = "10", search, filters } = req.query;

			const result = await this.userService.getAllUsers({
				page: +page,
				limit: +limit,
				search: search as string,
				filters: filters as string,
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