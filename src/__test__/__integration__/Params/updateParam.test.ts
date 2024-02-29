import { ParamsModel } from "../../../Models/checklist.model";
import request from "supertest";
import { start } from "../../../app";
import mongoose from "mongoose";

const app = start();

describe("PUT /checklist/params/:id", () => {
    const updatedParamDto = {
        name: "updatedParam",
    };

    it("should update parameter successfully", async () => {
        const params = await ParamsModel.find();
        const param = params[0]._id;

        await request(app)
            .put(`/checklist/params/${param}`)
            .send(updatedParamDto)
            .expect(200);
    });

    it("should return 404 if parameter is not found", async () => {
        const id = new mongoose.Types.ObjectId();

        await request(app)
            .put(`/checklist/params/${id}`)
            .send(updatedParamDto)
            .expect(404);
    });
});
