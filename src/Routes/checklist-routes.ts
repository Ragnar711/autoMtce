import { Router } from "express";
import { getChecklistHandler } from "../Controllers/get-checklist";
import { updateChecklistHandler } from "../Controllers/update-checklist";
import { deleteChecklistHandler } from "../Controllers/delete-checklist";

const router = Router();

router.get("/", getChecklistHandler);
router.put("/:id", updateChecklistHandler);
router.put("/delete/:id", deleteChecklistHandler);

export default router;
