import request from "supertest";
import { start } from "../../../app";
import { EnsembleModel, SystemModel } from "../../../Models/checklist.model";

const app = start();

describe("POST /ensembles", () => {
    it("should add a new ensemble to a system", async () => {
        const system = new SystemModel({
            name: "TestSystem",
        });
        await system.save();

        const ensembleData = { name: "Test Ensemble", elements: [] };

        const response = await request(app)
            .post(`/checklist/ensemble/${system._id}`)
            .send(ensembleData);

        expect(response.status).toBe(201);

        const ensemble = await EnsembleModel.findOne({ name: "Test Ensemble" });
        expect(ensemble).toBeTruthy();
    });
});
