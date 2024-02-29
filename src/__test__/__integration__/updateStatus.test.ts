import request from "supertest";
import { start } from "../../app";
import { OperationModel } from "../../Models/checklist.model";
import mongoose from "mongoose";

const app = start();

describe("PUT /checklist/:id", () => {
    it("should update operation status successfully", async () => {
        const operations = await OperationModel.find();
        const operation = operations[0]._id;
        await request(app).put(`/checklist/${operation}`).expect(200);
    });

    it("should return 404 if operation is not found", async () => {
        const id = new mongoose.Types.ObjectId();

        await request(app).put(`/checklist/${id}`).expect(404);
    });
});
