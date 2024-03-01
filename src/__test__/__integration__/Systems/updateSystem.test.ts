import { SystemModel } from "../../../Models/checklist.model";
import request from "supertest";
import { start } from "../../../app";
import mongoose from "mongoose";

const app = start();

describe("PUT /checklist/system/:id", () => {
    const updatedSystemDto = {
        name: "updatedSystem",
    };

    it("should update system successfully", async () => {
        const systems = await SystemModel.find();
        const system = systems[0]._id;

        await request(app)
            .put(`/checklist/system/${system}`)
            .send(updatedSystemDto)
            .expect(200);
    });

    it("should return 404 if system is not found", async () => {
        const id = new mongoose.Types.ObjectId();

        await request(app)
            .put(`/checklist/system/${id}`)
            .send(updatedSystemDto)
            .expect(404);
    });
});
