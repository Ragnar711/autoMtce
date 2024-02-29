import { Request, Response } from "express";
import { OperationModel } from "../Models/checklist.model";
import { NotFoundError } from "../Utils/errors";

export const updateStatus = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    const existingOperation = await OperationModel.findById(id);
    if (!existingOperation) {
        throw new NotFoundError("Opération n'existe pas");
    }

    await OperationModel.updateOne({ _id: id }, { status: true });

    res.status(200).json({ message: "Operation updated successfully" });
};
