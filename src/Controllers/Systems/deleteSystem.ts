import { Request, Response } from "express";
import {
    EnsembleModel,
    SystemModel,
    ElementModel,
    OperationModel,
} from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const deleteSystem = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    const system = await SystemModel.findById(id);

    if (!system || system.deleted)
        throw new NotFoundError("Système n'existe pas");

    const ensembles = await EnsembleModel.find({
        _id: { $in: system.ensembles },
    });

    for (const ensemble of ensembles) {
        const elements = await ElementModel.find({
            _id: { $in: ensemble.elements },
        });

        for (const element of elements) {
            await OperationModel.updateMany(
                {
                    _id: { $in: element.operations },
                },
                { deleted: true },
            );
            await ElementModel.updateOne(
                { _id: element._id },
                { deleted: true },
            );
        }

        await EnsembleModel.updateOne({ _id: ensemble._id }, { deleted: true });
    }

    await SystemModel.updateOne({ _id: system._id }, { deleted: true });

    res.sendStatus(200);
};
