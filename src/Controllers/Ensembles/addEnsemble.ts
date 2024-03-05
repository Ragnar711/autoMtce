import { Request, Response } from "express";
import { EnsembleModel, SystemModel } from "../../Models/checklist.model";
import { BadRequestError, NotFoundError } from "../../Utils/errors";

interface IEnsemble {
    name: string;
    elements: [];
}

export const addEnsemble = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const data: IEnsemble = req.body;
    const systemId: string = req.params.id;

    const existingEnsemble = await EnsembleModel.findOne({ name: data.name });

    if (existingEnsemble) throw new BadRequestError("Ensemble existe déjà");

    const newEnsemble = await EnsembleModel.create(data);

    const parentSystem = await SystemModel.findById(systemId);

    if (!parentSystem) throw new NotFoundError("Système n'existe pas");

    parentSystem.ensembles.push(newEnsemble._id);
    await parentSystem.save();

    res.sendStatus(201);
};
