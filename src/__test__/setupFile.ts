import mongoose from "mongoose";
import Checklist from "../Models/checklist-model";

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI ?? "");

    const checklist1 = Checklist.build({
        organe: "Organe",
        operations: ["Operation 1", "Operation 2"],
    });
    await checklist1.save();

    const checklist2 = Checklist.build({
        organe: "Another Organe",
        operations: ["Another Operation 1", "Another Operation 2"],
    });
    await checklist2.save();

    const checklist3 = Checklist.build({
        organe: "Yet ANother Organe",
        operations: ["Yet ANother Operation 1", "Yet ANother Operation 2"],
    });
    await checklist3.save();
});

afterAll(async () => {
    await mongoose.disconnect();
});
