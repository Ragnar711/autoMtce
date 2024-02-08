import { Router } from "express";
import { getChecklist } from "../Controllers/getChecklist";
import { updateStatus } from "../Controllers/update-status";

const router = Router();

router.get("/:niveau", getChecklist);
router.put("/:id", updateStatus);

export default router;
