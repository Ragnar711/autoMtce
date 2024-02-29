import request from "supertest";
import { start } from "../../../app";

const app = start();

interface Params {
    name: string;
    min: number;
    max: number;
    deleted?: boolean;
}

describe("GET /params", () => {
    it("Should return the parameters", async () => {
        const res = await request(app).get("/checklist/params").expect(200);

        expect(res.body).toHaveProperty("params");

        res.body.params.forEach((element: Params) => {
            expect(element.deleted).toBe(false);
        });
    });
});
