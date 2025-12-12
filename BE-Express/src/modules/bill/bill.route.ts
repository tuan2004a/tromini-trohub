import { Router } from "express";
import { authMiddleware } from "@/middleware/authMiddleware";
import { BillController } from "./bill.controller";

const router: any = Router();
const billController = new BillController();

//🌐 public routes

//🛡️ private routes
router.use(authMiddleware);
router.get("/getAllBills", billController.GetAllBill.bind(billController));
router.post("/create-bill", billController.CreateBill.bind(billController));
router.put("/update-bill/:id", billController.UpdateBill.bind(billController));
router.delete("/delete-bill/:id", billController.DeleteBill.bind(billController));

router.get("/find-bill/:id", billController.FindBillById.bind(billController));
router.post("/update-status/:id", billController.FindUpdateStatus.bind(billController));

export default router;
