import { Router } from "express";
import userRoutes from "../../modules/user/user.route";
import authRouter from "../../modules/auth/auth.route";

const router: any = Router();

router.use("/auth", authRouter);
router.use("/users", userRoutes);


export default router;