import { Request, Response } from "express";
import { ChecklistModel } from "../Models/checklist.model";

export const getChecklist = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const checklist = await ChecklistModel.find({})
            .populate({
                path: "systems",
                match: { deleted: false },
                populate: {
                    path: "ensembles",
                    match: { deleted: false },
                    populate: {
                        path: "elements",
                        match: { deleted: false },
                        populate: {
                            path: "operations",
                            match: {
                                deleted: false,
                                status: false,
                            },
                        },
                    },
                },
            })
            .populate({
                path: "params",
                match: { deleted: false },
            });

        if (checklist.length > 0) {
            res.status(200).json(checklist);
        } else {
            res.status(404).json({ error: "No checklist found" });
        }
    } catch (error) {
        console.error("Error fetching checklist:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
