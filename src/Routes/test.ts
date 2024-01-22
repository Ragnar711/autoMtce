import { Router } from "express";
import { TEST } from "../Controllers/test";

const router = Router();

router.get("/", TEST);

export default router;
