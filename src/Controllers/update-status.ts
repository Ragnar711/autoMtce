import { Request, Response } from "express";
import { OperationModel } from "../Models/checklist.model";

export const updateStatus = async (
    req: Request,
    res: Response,
): Promise<Response | void> => {
    const id = req.params.id;

    try {
        const existingOperation = await OperationModel.findById(id);
        if (!existingOperation) {
            return res.status(404).json({ message: "Operation not found" });
        }

        const updatedOperation = await OperationModel.updateOne(
            { _id: id },
            { status: true },
        );

        if (updatedOperation.modifiedCount === 0) {
            return res.status(304).send();
        }

        return res
            .status(200)
            .json({ message: "Operation updated successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};
