import request from "supertest";
import { start } from "../../app";

const app = start();
describe("GET /checklist", () => {
    it("should return all the documents from the checklist collection", async () => {
        const response = await request(app).get("/checklist").expect(200);

        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);

        const document = response.body[0];
        expect(document).toHaveProperty("_id");
        expect(document).toHaveProperty("organe");
        expect(document).toHaveProperty("operations");
        expect(document.operations).toBeInstanceOf(Array);
    });
});
