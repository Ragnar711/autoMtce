import request from "supertest";
import { start } from "../../../app";
import { EnsembleModel } from "../../../Models/checklist.model";
import mongoose from "mongoose";

const app = start();

describe("updateEnsemble endpoint", () => {
    it("should update an ensemble", async () => {
        const existingEnsembles = await EnsembleModel.find();
        const existingEnsemble = existingEnsembles[0]._id;

        const ensemble = { name: "Updated Ensemble Name" };
        const response = await request(app)
            .put(`/checklist/ensemble/${existingEnsemble}`)
            .send(ensemble);

        expect(response.status).toBe(200);
    });

    it("should return an error for invalid ensemble ID", async () => {
        const id = new mongoose.Types.ObjectId();
        const ensemble = { name: "Updated Ensemble Name" };
        const response = await request(app)
            .put(`/checklist/ensemble/${id}`)
            .send(ensemble);

        expect(response.status).toBe(404);
    });
});
