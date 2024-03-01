import request from "supertest";
import { start } from "../../../app";
import { SystemModel } from "../../../Models/checklist.model";
import mongoose from "mongoose";

const app = start();

describe("Delete /system/:id", () => {
    it("Should delete a system", async () => {
        const systems = await SystemModel.find();
        const system = systems[0]._id;

        await request(app).delete(`/checklist/system/${system}`).expect(200);
    });

    it("should return 404 if system is not found", async () => {
        const id = new mongoose.Types.ObjectId();

        await request(app).delete(`/checklist/system/${id}`).expect(404);
    });
});
