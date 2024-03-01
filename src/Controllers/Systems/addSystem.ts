import { Request, Response } from "express";
import { ChecklistModel, SystemModel } from "../../Models/checklist.model";
import { BadRequestError } from "../../Utils/errors";

export const addSystem = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;

    const existingSystem = await SystemModel.findOne({ name });

    if (existingSystem) throw new BadRequestError("Système existe déjà");

    const response = await SystemModel.create({ name, ensembles: [] });

    const checklist = await ChecklistModel.findOne().sort({ _id: -1 });
    checklist?.systems.push(response._id);
    await checklist?.save();

    res.sendStatus(201);
};
