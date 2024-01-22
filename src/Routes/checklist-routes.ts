import { Router } from "express";
import { get_checklist_handler } from "../Controllers/get-checklist";

const router = Router();

router.get("/", get_checklist_handler);

export default router;
