import { Request, Response } from "express";
import { OperationModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

interface IOperation {
    name: string;
    frequency: "E" | "J" | "H" | "2S";
    level: 1 | 2;
    type: "nettoyage" | "inspection" | "réglage";
    dueDate: Date;
}

export const updateOperation = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;
    const data: IOperation = req.body;

    const updatedOperation = await OperationModel.findByIdAndUpdate(id,  data );

    if (!updatedOperation || updatedOperation.deleted)
        throw new NotFoundError("Opération n'existe pas");

    res.sendStatus(200);
};
