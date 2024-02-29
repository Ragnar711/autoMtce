import { Request, Response } from "express";
import { ChecklistModel, ParamsModel } from "../../Models/checklist.model";
import { BadRequestError } from "../../Utils/errors";

export const addParam = async (req: Request, res: Response): Promise<void> => {
    const { name, min, max } = req.body;

    const existingParam = await ParamsModel.findOne({ name });

    if (existingParam) throw new BadRequestError("Paramètre existe déjà");

    const response = await ParamsModel.create({ name, min, max });

    const checklist = await ChecklistModel.findOne().sort({ _id: -1 });
    checklist?.params.push(response._id);
    await checklist?.save();

    res.status(201);
};
