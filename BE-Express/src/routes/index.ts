import { Router, Request, Response } from "express";
import v1Routes from "./v1/router";

const router: Router = Router();

router.use("/v1", v1Routes);

export default router;