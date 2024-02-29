import { Request, Response } from "express";
import { ChecklistModel } from "../Models/checklist.model";

export const getParams = async (req: Request, res: Response): Promise<void> => {
    try {
        const params = await ChecklistModel.find({}).populate({
            path: "params",
            match: { deleted: false },
        });

        if (params.length > 0) {
            res.status(200).json(params[0]);
        } else {
            res.status(404).json({ error: "No checklist found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
