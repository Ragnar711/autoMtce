import { Request, Response } from "express";
import { ElementModel, OperationModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const deleteElement = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    const element = await ElementModel.findById(id);

    if (!element || element.deleted)
        throw new NotFoundError("Element n'existe pas");

    const operations = await OperationModel.find();

    for (const operation of operations) {
        await OperationModel.updateOne(
            { _id: operation._id },
            { deleted: true },
        );
    }
    await ElementModel.updateOne({ _id: element._id }, { deleted: true });

    res.sendStatus(200);
};
