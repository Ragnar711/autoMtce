import request from "supertest";
import { start } from "../../app";

const app = start();

describe("DELETE /checklist/:id", () => {
    it("should delete a document", async () => {
        const document = await request(app).get("/checklist");

        const documentId = document.body[0]._id;

        const response = await request(app)
            .put(`/checklist/delete/${documentId}`)
            .expect(200);

        expect(response.body).toHaveProperty("deleted");
        expect(response.body.deleted).toBe(true);
    });
});
