import { Request, Response } from "express";
import { SystemModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const updateSystem = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;
    const { name } = req.body;

    const updatedSystem = await SystemModel.findByIdAndUpdate(id, { name });

    if (!updatedSystem || updatedSystem.deleted)
        throw new NotFoundError("Système n'existe pas");

    res.sendStatus(200);
};
