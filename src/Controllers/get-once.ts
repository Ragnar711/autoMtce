import { Request, Response } from "express";
import { ChecklistModel } from "../Models/checklist.model";
import { UpdatedChecklistModel } from "../Models/updated-checklist.model";
import { Poste } from "../Utils/get-poste";

export const getChecklist = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const currentPoste = new Poste();

        const updatedChecklist = await UpdatedChecklistModel.findOne(
            {},
            {},
            { sort: { updatedAt: -1 } },
        );

        const checklistQueryOptions = { sort: { updatedAt: -1 } };
        const checklist = await ChecklistModel.findOne(
            {},
            {},
            checklistQueryOptions,
        );

        if (checklist) {
            if (
                updatedChecklist &&
                currentPoste.isInTimeRange(updatedChecklist.updatedAt)
            ) {
                res.status(200).json(updatedChecklist);
            } else {
                res.status(200).json(checklist);
            }
        } else {
            res.status(404).json({ error: "No checklist found" });
        }
    } catch (error) {
        console.error("Error fetching checklist:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Implement the frequency filtering logic
// Update the due date in the checklist collection after each call
