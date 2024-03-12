import request from "supertest";
import { start } from "../../../app";
import { EnsembleModel } from "../../../Models/checklist.model";

const app = start();

describe("DELETE /ensembles/:id", () => {
    it("should delete an ensemble and its associated elements and operations", async () => {
        const ensemble = await EnsembleModel.create({
            name: "Test Ensemble",
            elements: [],
        });

        await request(app)
            .delete(`/checklist/ensemble/${ensemble._id}`)
            .expect(200);

        const deletedEnsemble = await EnsembleModel.findById(ensemble._id);
        expect(deletedEnsemble?.deleted).toBe(true);
    });
});
