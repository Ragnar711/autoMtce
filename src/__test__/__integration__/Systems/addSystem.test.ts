import request from "supertest";
import { start } from "../../../app";

const app = start();

describe("POST /system", () => {
    it("should add a new system", async () => {
        const newSystem = {
            name: "TestSystem",
            ensembles: [],
        };

        await request(app)
            .post("/checklist/system")
            .send(newSystem)
            .expect(201);
    });
});
