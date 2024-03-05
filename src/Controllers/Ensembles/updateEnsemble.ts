import { Request, Response } from "express";
import { EnsembleModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const updateEnsemble = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;
    const { name } = req.body;

    const updatedEnsemble = await EnsembleModel.findByIdAndUpdate(id, { name });

    if (!updatedEnsemble || updatedEnsemble.deleted)
        throw new NotFoundError("Ensemble n'existe pas");

    res.sendStatus(200);
};
