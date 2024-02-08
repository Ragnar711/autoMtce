import request from "supertest";
import { start } from "../../app";

const app = start();

describe("GET /checklist", () => {
    it("should return checklist systems and params", async () => {
        const res = await request(app).get("/checklist");

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("Systems");
        expect(res.body).toHaveProperty("Params");
    });
});
