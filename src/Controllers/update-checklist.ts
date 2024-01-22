import { Request, Response } from "express";
import Checklist from "../Models/checklist-model";
import { NotFoundError } from "../Utils/errors";

export const updateChecklistHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    const existingChecklist = await Checklist.findById(id);

    if (!existingChecklist) {
        throw new NotFoundError();
    }

    const updatedChecklist = await Checklist.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true },
    );

    res.status(200).json(updatedChecklist);
};
