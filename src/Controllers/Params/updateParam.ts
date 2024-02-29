import { Request, Response } from "express";
import { ParamsModel } from "../../Models/checklist.model";
import { NotFoundError } from "../../Utils/errors";

export const updateParam = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const id = req.params.id;
    const { name, min, max } = req.body;

    console.log(id);

    const updateObject: { [key: string]: string | number } = {};

    if (name) {
        updateObject.name = name;
    }
    if (min) {
        updateObject.min = min;
    }
    if (max) {
        updateObject.max = max;
    }

    const updatedParam = await ParamsModel.findByIdAndUpdate(id, updateObject);

    if (!updatedParam) {
        throw new NotFoundError("Paramètre n'existe pas");
    } else {
        res.sendStatus(200);
    }
};
