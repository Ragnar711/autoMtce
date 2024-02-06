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

        const checklist: any = await ChecklistModel.find({});

        let out: any[] = [];
        for (let i = 0; i < checklist.length; i++) {
            out.push({ ...checklist[i]._doc, systems: [] });
            filterChecklist(out.at(-1).systems, checklist[i].systems);
        }

        if (checklist) {
            if (
                updatedChecklist &&
                currentPoste.isInTimeRange(updatedChecklist.updatedAt)
            ) {
                res.status(200).json(updatedChecklist);
            } else {
                res.status(200).json(out);
            }
        } else {
            res.status(404).json({ error: "No checklist found" });
        }
    } catch (error) {
        console.error("Error fetching checklist:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

function filterChecklist(out: any[], array: any[], index: number = 0) {
    const keys = ["ensembles", "elements", "operations"];
    for (let i = 0; i < array.length; i++) {
        if (array[i].deleted) continue;
        out.push({ ...array[i]._doc });
        delete out.at(-1).deleted;
        if (keys[index]) {
            out.at(-1)[keys[index]] = [];

            filterChecklist(
                out.at(-1)[keys[index]],
                array[i][keys[index]],
                index + 1,
            );
        }
    }
}
