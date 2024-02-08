import request from "supertest";
import { start } from "../../app";

const app = start();

describe("GET /checklist", () => {
    it("should return first level checklist", async () => {
        const res = await request(app).get("/checklist/1");

        expect(res.status).toBe(200);
        expect(res.body[0]).toHaveProperty("systems");
        expect(res.body[0].systems[0]).toHaveProperty("ensembles");
        expect(res.body[0].systems[0].ensembles[0]).toHaveProperty("elements");
        expect(res.body[0].systems[0].ensembles[0].elements[0]).toHaveProperty(
            "operations",
        );
        expect(
            res.body[0].systems[0].ensembles[0].elements[0].operations[0],
        ).toHaveProperty("level");
        expect(
            res.body[0].systems[0].ensembles[0].elements[0].operations[0].level,
        ).toBe(1);
    });

    it("should return second level checklist", async () => {
        const res = await request(app).get("/checklist/2");

        expect(res.status).toBe(200);
        expect(res.body[0]).toHaveProperty("systems");
        expect(res.body[0].systems[0]).toHaveProperty("ensembles");
        expect(res.body[0].systems[0].ensembles[0]).toHaveProperty("elements");
        expect(res.body[0].systems[0].ensembles[0].elements[0]).toHaveProperty(
            "operations",
        );
        expect(
            res.body[0].systems[0].ensembles[0].elements[0].operations[0],
        ).toHaveProperty("level");
        expect(
            res.body[0].systems[0].ensembles[0].elements[0].operations[0].level,
        ).toBe(2);
    });
});
