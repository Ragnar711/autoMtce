import { Router } from "express";
import { getChecklist } from "../Controllers/getChecklist";
import { updateStatus } from "../Controllers/updateStatus";

const router = Router();

router.get("/:niveau/:type", getChecklist);
router.put("/:id", updateStatus);

export default router;
