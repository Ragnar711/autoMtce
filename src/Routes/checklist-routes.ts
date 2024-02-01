import { Router } from "express";
import { getChecklist } from "../Controllers/get-once";

const router = Router();

router.get("/", getChecklist);

export default router;
