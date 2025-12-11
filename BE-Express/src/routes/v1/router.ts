import { Router } from "express";
import userRoutes from "../../modules/user/user.route";
import authRouter from "../../modules/auth/auth.route";
import roomRouter from "../../modules/room/room.route";
import contractRouter from "../../modules/contract/contract.route";
import billRouter from "../../modules/bill/bill.route";

const router: any = Router();

router.use("/auth", authRouter);
router.use("/users", userRoutes);
router.use("/rooms", roomRouter);
router.use("/contract", contractRouter);
router.use("/bill", billRouter);

export default router;