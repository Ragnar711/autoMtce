import { Router } from "express";
import { getChecklistHandler } from "../Controllers/get-checklist";
import { updateChecklistHandler } from "../Controllers/update-checklist";

const router = Router();

router.get("/", getChecklistHandler);
router.put("/:id", updateChecklistHandler);

export default router;
