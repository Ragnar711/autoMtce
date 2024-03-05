import { Request, Response } from "express";
import { ElementModel, OperationModel } from "../../Models/checklist.model";
import { BadRequestError, NotFoundError } from "../../Utils/errors";

interface IOperation {
    name: string;
    frequency: "E" | "J" | "H" | "2S";
    level: 1 | 2;
    type: "nettoyage" | "inspection" | "réglage";
    dueDate: Date;
}

export const addOperation = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const data: IOperation = req.body;
    const elementId: string = req.params.id;

    const existingOperation = await OperationModel.findOne({ name: data.name });

    if (existingOperation) throw new BadRequestError("Opération existe déjà");

    const newOperation = await OperationModel.create(data);

    const parentElement = await ElementModel.findById(elementId);

    if (!parentElement) throw new NotFoundError("Elément n'existe pas");

    parentElement.operations.push(newOperation._id);
    await parentElement.save();

    res.sendStatus(201);
};
