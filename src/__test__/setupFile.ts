import mongoose from "mongoose";
import Checklist from "../Models/checklist-model";

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI ?? "");

    await Checklist.deleteMany({});

    const checklist1 = Checklist.build({
        organe: "Organe 1",
        operations: ["Operation 1", "Operation 2"],
    });
    await checklist1.save();

    const checklist2 = Checklist.build({
        organe: "Organe 2",
        operations: ["Operation 1", "Operation 2"],
    });
    await checklist2.save();

    const checklist3 = Checklist.build({
        organe: "Organe 3",
        operations: ["Operation 1", "Operation 2"],
    });
    await checklist3.save();
});

afterAll(async () => {
    await mongoose.disconnect();
});
