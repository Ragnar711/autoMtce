import { Request, Response } from "express";
import { ParamsModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const deleteParam = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;

    const param = await ParamsModel.findById(id);

    if (!param) throw new NotFoundError("Paramètre n'existe pas");

    await ParamsModel.updateOne({ _id: id }, { deleted: true });

    res.sendStatus(200);
};
