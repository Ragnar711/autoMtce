import { Request, Response } from "express";
import { ElementModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const updateElement = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;
    const { name } = req.body;

    const updatedElement = await ElementModel.findByIdAndUpdate(id, { name });

    if (!updatedElement || updatedElement.deleted)
        throw new NotFoundError("Element n'existe pas");

    res.sendStatus(200);
};
