import { Request, Response } from "express";
import { OperationModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const deleteOperation = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    const operation = await OperationModel.findById(id);

    if (!operation || operation.deleted)
        throw new NotFoundError("Opération n'existe pas");

    await OperationModel.updateOne({ _id: operation._id }, { deleted: true });

    res.sendStatus(200);
};
