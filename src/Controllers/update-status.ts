import { Request, Response } from "express";
import { OperationModel } from "../Models/checklist.model";

export const updateStatus = async (req: Request, res: Response) => {
    const id = req.params.id;

    const existingOperation = await OperationModel.findById(id);

    if (!existingOperation) {
        res.status(404).json({ error: "Opération n'existe pas" });
    }

    const updatedOperation = await OperationModel.updateOne(
        { _id: id },
        { status: true },
    );

    res.status(200).send(updatedOperation);
};
