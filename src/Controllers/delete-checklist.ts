import { Request, Response } from "express";
import Checklist from "../Models/checklist-model";
import { NotFoundError } from "../Utils/errors";

export const deleteChecklistHandler = async (req: Request, res: Response) => {
    const id = req.params.id;

    const checklist = await Checklist.findById(id);

    if (!checklist) {
        throw new NotFoundError();
    }

    const deletedChecklist = await Checklist.findByIdAndUpdate(
        id,
        { deleted: true },
        { new: true },
    );

    res.status(200).json(deletedChecklist);
};
