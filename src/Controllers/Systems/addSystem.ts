import { Request, Response } from "express";
import { ChecklistModel, SystemModel } from "../../Models/checklist.model";
import { BadRequestError, NotFoundError } from "../../Utils/errors";

interface ISystem {
    name: string;
    ensembles: [];
}

export const addSystem = async (req: Request, res: Response): Promise<void> => {
    const data: ISystem = req.body;

    const existingSystem = await SystemModel.findOne({ name: data.name });

    if (existingSystem) throw new BadRequestError("Système existe déjà");

    const response = await SystemModel.create(data);

    const checklist = await ChecklistModel.findOne().sort({ _id: -1 });

    if (!checklist) throw new NotFoundError("Checklist n'existe pas");

    checklist.params.push(response._id);
    await checklist?.save();

    res.sendStatus(201);
};
