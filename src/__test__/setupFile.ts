import mongoose from "mongoose";
import Checklist from "../Models/checklist-model";

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI ?? "");

    const checklist1 = Checklist.build({
        organe: "Organe",
        operations: [
            {
                operation: "Operation 1",
                type: "valid",
            },
            {
                operation: "Operation 2",
                type: "ok",
            },
        ],
    });
    await checklist1.save();

    const checklist2 = Checklist.build({
        organe: "Another Organe",
        operations: [
            {
                operation: "Another Operation 1",
                type: "valid",
            },
            {
                operation: "Another Operation 2",
                type: "ok",
            },
        ],
    });
    await checklist2.save();

    const checklist3 = Checklist.build({
        organe: "Yet ANother Organe",
        operations: [
            {
                operation: "Yet ANother Operation 1",
                type: "valid",
            },
            {
                operation: "Yet ANother Operation 2",
                type: "ok",
            },
        ],
    });
    await checklist3.save();
});

afterAll(async () => {
    await mongoose.disconnect();
});
