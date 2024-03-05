import asyncHandler from "express-async-handler";
import { Router } from "express";
import { getChecklist } from "../Controllers/getChecklist";
import { updateStatus } from "../Controllers/updateStatus";
import { getParams } from "../Controllers/Params/getParams";
import { addParam } from "../Controllers/Params/addParam";
import { updateParam } from "../Controllers/Params/updateParam";
import { deleteParam } from "../Controllers/Params/deleteParam";
import { addSystem } from "../Controllers/Systems/addSystem";
import { deleteSystem } from "../Controllers/Systems/deleteSystem";
import { updateSystem } from "../Controllers/Systems/updateSystem";
import { addEnsemble } from "../Controllers/Ensembles/addEnsemble";
import { deleteEnsemble } from "../Controllers/Ensembles/deleteEnsemble";
import { updateEnsemble } from "../Controllers/Ensembles/updateEnsemble";

const router = Router();

router.get("/:niveau/:type", asyncHandler(getChecklist));

router.get("/params", asyncHandler(getParams));
router.post("/params", asyncHandler(addParam));
router.put("/params/:id", asyncHandler(updateParam));
router.delete("/params/:id", asyncHandler(deleteParam));

router.post("/system", asyncHandler(addSystem));
router.delete("/system/:id", asyncHandler(deleteSystem));
router.put("/system/:id", asyncHandler(updateSystem));

router.post("/ensemble/:id", asyncHandler(addEnsemble));
router.delete("/ensemble/:id", asyncHandler(deleteEnsemble));
router.put("/ensemble/:id", asyncHandler(updateEnsemble));

router.put("/:id", asyncHandler(updateStatus));

export default router;
