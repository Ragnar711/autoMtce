import { Request, Response } from "express";
import { populateChecklist } from "../Utils/filter";
import { NotFoundError } from "../Utils/errors";

export const getChecklist = async (
    req: Request,
    res: Response,
): Promise<void> => {
    const niveau = Number(req.params.niveau);
    const type: string = req.params.type;

    const checklist = await populateChecklist(niveau, type);

    if (checklist.length > 0) {
        res.status(200).json(checklist[0]);
    } else {
        throw new NotFoundError("Checklist n'existe pas");
    }
};
