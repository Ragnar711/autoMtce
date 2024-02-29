import { Request, Response } from "express";
import { OperationModel } from "../Models/checklist.model";
import { BadRequestError } from "../Utils/errors";

export const updateStatus = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    try {
        const existingOperation = await OperationModel.findById(id);
        if (!existingOperation) {
            throw new BadRequestError("Opération n'existe pas");
        }

        await OperationModel.updateOne({ _id: id }, { status: true });

        res.status(200).json({ message: "Operation updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
