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
        const checklist = await ChecklistModel.find({});

        const processedChecklist = processChecklist(checklist);

        if (checklist.length > 0) {
            if (
                updatedChecklist &&
                currentPoste.isInTimeRange(updatedChecklist.updatedAt)
            ) {
                res.status(200).json(updatedChecklist);
            } else {
                res.status(200).json(processedChecklist);
            }
        } else {
            res.status(404).json({ error: "No checklist found" });
        }
    } catch (error) {
        console.error("Error fetching checklist:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function processChecklist(checklist: any[]): any[] {
    return checklist.map((item) => {
        const processedItem = { ...item._doc, systems: [] };
        filterChecklist(processedItem.systems, item.systems);
        return processedItem;
    });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function filterChecklist(out: any[], array: any[], index = 0): void {
    const keys = ["ensembles", "elements", "operations"];
    for (const item of array) {
        if (item.deleted || item.status) continue;
        const newItem = { ...item._doc };
        delete newItem.deleted;
        if (keys[index]) {
            newItem[keys[index]] = [];
            filterChecklist(newItem[keys[index]], item[keys[index]], index + 1);
        }
        out.push(newItem);
    }
}
