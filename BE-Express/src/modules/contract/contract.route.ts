import { Router } from "express";
import { authMiddleware } from "@/middleware/authMiddleware";
import { ContractController } from "./contract.controller"

const router: any = Router();
const ContracController = new ContractController();

//🌐 public routes

//🛡️ private routes
router.use(authMiddleware);
router.get("/getAllRooms", ContracController.GetAllContracts.bind(ContracController));
router.post("/create-room", ContracController.CreateContract.bind(ContracController));
router.put("/update-room/:id", ContracController.UpdateContract.bind(ContracController));
router.delete("/delete-room/:id", ContracController.DeleteContract.bind(ContracController));

// router.get("/find-room/:id", ContracController..bind(ContracController));

router.post("/update-status/:id", ContracController.FindUpdateStatus.bind(ContracController));

export default router;