import request from "supertest";
import { start } from "../../../app";

const app = start();

describe("POST /params", () => {
    it("should add a new parameter", async () => {
        const newParam = {
            name: "TestParam",
            min: 1,
            max: 10,
        };

        await request(app).post("/checklist/params").send(newParam).expect(201);
    });
});
