import asyncHandler from "express-async-handler";
import { Router } from "express";
import { getChecklist } from "../Controllers/getChecklist";
import { updateStatus } from "../Controllers/updateStatus";
import { getParams } from "../Controllers/getParams";
import { addParam } from "../Controllers/addParam";

const router = Router();

router.get("/:niveau/:type", asyncHandler(getChecklist));
router.get("/params", asyncHandler(getParams));
router.put("/:id", asyncHandler(updateStatus));
router.post("/params", asyncHandler(addParam));

export default router;
