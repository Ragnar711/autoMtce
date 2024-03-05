import { Request, Response } from "express";
import { EnsembleModel, ElementModel } from "../../Models/checklist.model";
import { BadRequestError, NotFoundError } from "../../Utils/errors";

interface IElement {
    name: string;
    operations: [];
}

export const addElement = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const data: IElement = req.body;
    const ensembleId: string = req.params.id;

    const existingElement = await ElementModel.findOne({ name: data.name });

    if (existingElement) throw new BadRequestError("Elément existe déjà");

    const newElement = await ElementModel.create(data);

    const parentEnsemble = await EnsembleModel.findById(ensembleId);

    if (!parentEnsemble) throw new NotFoundError("Ensemble n'existe pas");

    parentEnsemble.elements.push(newElement._id);
    await parentEnsemble.save();

    res.sendStatus(201);
};
