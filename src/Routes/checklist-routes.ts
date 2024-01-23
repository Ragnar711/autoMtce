import { Router } from "express";
import { getChecklistHandler } from "../Controllers/get-checklist";
import { updateChecklistHandler } from "../Controllers/update-checklist";
import { deleteChecklistHandler } from "../Controllers/delete-checklist";
import { addChecklistHandler } from "../Controllers/add-checklist";

const router = Router();

router.get("/", getChecklistHandler);
router.put("/:id", updateChecklistHandler);
router.put("/delete/:id", deleteChecklistHandler);
router.post("/", addChecklistHandler);

export default router;
