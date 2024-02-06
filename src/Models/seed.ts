import mongoose from "mongoose";
import * as dotenv from "dotenv";
import {
    OperationModel,
    ElementModel,
    EnsembleModel,
    SystemModel,
    ParamsModel,
    ChecklistModel,
} from "./checklist.model";

async function seedDatabase() {
    try {
        dotenv.config();

        mongoose.set("strictQuery", true);

        const MONGO_URI = process.env.MONGO_URI;

        mongoose.connect(MONGO_URI!);

        const operation1 = await OperationModel.create({
            name: "Operation 1",
            frequency: "E",
            level: 1,
            type: "nettoyage",
            status: true,
            dueDate: new Date("2024-01-01 06:00:00"),
        });

        const element1 = await ElementModel.create({
            name: "Element 1",
            operations: [operation1._id],
        });

        const ensemble1 = await EnsembleModel.create({
            name: "Ensemble 1",
            elements: [element1._id],
        });

        const system1 = await SystemModel.create({
            name: "System 1",
            ensembles: [ensemble1._id],
        });

        const params1 = await ParamsModel.create({
            name: "Params 1",
            min: 1,
            max: 10,
        });

        await ChecklistModel.create({
            systems: [system1._id],
            params: [params1._id],
        });

        console.log("Sample data seeded successfully.");
    } catch (error) {
        console.error("Error seeding sample data:", error);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
