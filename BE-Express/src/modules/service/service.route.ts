import { Router } from "express";
import { authMiddleware } from "@/middleware/authMiddleware";
import { ServiceController } from "./service.controller";

const router: any = Router();
const serviceController = new ServiceController();

//🌐 public routes

//🛡️ private routes
router.use(authMiddleware);
router.get("/getAllBills", serviceController.GetAllService.bind(serviceController));
router.post("/create-bill", serviceController.CreateService.bind(serviceController));
router.put("/update-bill/:id", serviceController.UpdateService.bind(serviceController));
router.delete("/delete-bill/:id", serviceController.DeleteService.bind(serviceController));

export default router;