import { Request, Response } from "express";
import {
    ElementModel,
    EnsembleModel,
    OperationModel,
} from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const deleteEnsemble = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    const ensemble = await EnsembleModel.findById(id);

    if (!ensemble || ensemble.deleted)
        throw new NotFoundError("Ensemble n'existe pas");

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
        await ElementModel.updateOne({ _id: element._id }, { deleted: true });
    }
    await EnsembleModel.updateOne({ _id: ensemble._id }, { deleted: true });

    res.sendStatus(200);
};
