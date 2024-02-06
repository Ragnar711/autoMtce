import { Router } from "express";
import { getChecklist } from "../Controllers/get-once";
import { updateStatus } from "../Controllers/update-status";

const router = Router();

router.get("/", getChecklist);
router.put("/:id", updateStatus);

export default router;
