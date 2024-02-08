import { ChecklistModel } from "../Models/checklist.model";

export async function populateChecklist(level: number) {
    return ChecklistModel.find({})
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
                            level,
                        },
                    },
                },
            },
        })
        .populate({
            path: "params",
            match: { deleted: false },
        });
}
