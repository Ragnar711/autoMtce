import { Request, Response } from "express";
import Checklist from "../Models/checklist-model";
import { ForbiddenError } from "../Utils/errors";

export const addChecklistHandler = async (req: Request, res: Response) => {
    const existingOrgane = await Checklist.findOne({ organe: req.body.organe });

    if (existingOrgane) {
        throw new ForbiddenError();
    }

    const newChecklist = Checklist.build(req.body);

    await newChecklist.save();

    res.status(201).json(newChecklist);
};
