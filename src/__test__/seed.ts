import mongoose from "mongoose";
import dotenv from "dotenv";
import {
    OperationModel,
    ElementModel,
    EnsembleModel,
    SystemModel,
    ParamsModel,
    ChecklistModel,
} from "../Models/checklist.model";

async function seedDatabase() {
    try {
        dotenv.config();

        mongoose.set("strictQuery", true);

        mongoose.connect(process.env.MONGO_URI ?? "");

        const operation1 = await OperationModel.create({
            name: "Operation 1",
            frequency: "E",
            level: 1,
            type: "nettoyage",
            dueDate: new Date(),
        });

        const operation2 = await OperationModel.create({
            name: "Operation 2",
            frequency: "J",
            level: 2,
            type: "inspection",
            dueDate: new Date(),
        });

        const element1 = await ElementModel.create({
            name: "Element 1",
            operations: [operation1._id],
        });

        const element2 = await ElementModel.create({
            name: "Element 2",
            operations: [operation2._id],
        });

        const ensemble1 = await EnsembleModel.create({
            name: "Ensemble 1",
            elements: [element1._id],
        });

        const ensemble2 = await EnsembleModel.create({
            name: "Ensemble 2",
            elements: [element2._id],
        });

        const system1 = await SystemModel.create({
            name: "System 1",
            ensembles: [ensemble1._id],
        });

        const system2 = await SystemModel.create({
            name: "System 2",
            ensembles: [ensemble2._id],
        });

        const params1 = await ParamsModel.create({
            name: "Params 1",
            min: 0,
            max: 100,
        });

        const params2 = await ParamsModel.create({
            name: "Params 2",
            min: 50,
            max: 200,
        });

        await ChecklistModel.create({
            systems: [system1._id, system2._id],
            params: [params1._id, params2._id],
        });

        console.log("Sample data seeded successfully.");
    } catch (error) {
        console.error("Error seeding sample data:", error);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
