import { Request, Response } from "express";
import Checklist from "../Models/checklist-model";

export const get_checklist_handler = async (req: Request, res: Response) => {
    const checklist = await Checklist.find();

    res.json(checklist);
};
