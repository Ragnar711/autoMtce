import request from "supertest";
import { start } from "../../../app";
import { ParamsModel } from "../../../Models/checklist.model";
import mongoose from "mongoose";

const app = start();

describe("Delete /params/:id", () => {
    it("Should delete a parameter", async () => {
        const params = await ParamsModel.find();
        const param = params[0]._id;

        await request(app).put(`/checklist/params/${param}`).expect(200);
    });

    it("should return 404 if parameter is not found", async () => {
        const id = new mongoose.Types.ObjectId();

        await request(app).put(`/checklist/params/${id}`).expect(404);
    });
});
