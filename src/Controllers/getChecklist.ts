import { Request, Response } from "express";
import { populateChecklist } from "../Utils/filter";

export const getChecklist = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const niveau: number = Number(req.params.niveau);
        const type: string = req.params.type;

        const checklist = await populateChecklist(niveau, type);

        if (checklist.length > 0) {
            res.status(200).json(checklist);
        } else {
            res.status(404).json({ error: "No checklist found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
