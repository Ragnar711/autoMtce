import { Request, Response } from "express";
import Checklist from "../Models/checklist-model";

export const getChecklistHandler = async (req: Request, res: Response) => {
    const checklist = await Checklist.find({ deleted: false });

    res.json(checklist);
};
