import { Request, Response } from "express";
import { ChecklistModel, ParamsModel } from "../../Models/checklist.model";
import { BadRequestError, NotFoundError } from "../../Utils/errors";

interface IParams {
    name: string;
    min: number;
    max: number;
}

export const addParam = async (req: Request, res: Response): Promise<void> => {
    const data: IParams = req.body;

    const existingParam = await ParamsModel.findOne({ name: data.name });

    if (existingParam) throw new BadRequestError("Paramètre existe déjà");

    const response = await ParamsModel.create(data);

    const checklist = await ChecklistModel.findOne().sort({ _id: -1 });

    if (!checklist) throw new NotFoundError("Checklist n'existe pas");

    checklist.params.push(response._id);
    await checklist?.save();

    res.sendStatus(201);
};
