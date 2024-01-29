// import request from "supertest";
// import { start } from "../../app";

// const app = start();

// describe("PUT /checklist/:id", () => {
//     const validUpdatePayload = {
//         organe: "Updated Organ",
//         operations: ["Updated Operation 1", "Updated Operation 2"],
//         deleted: true,
//     };

//     it("should update a document", async () => {
//         const res = await request(app).get("/checklist");

//         const documentId = res.body[0]._id;

//         const response = await request(app)
//             .put(`/checklist/${documentId}`)
//             .send(validUpdatePayload)
//             .expect(200);

//         for (const [key, value] of Object.entries(validUpdatePayload)) {
//             expect(response.body).toHaveProperty(key, value);
//         }
//     });
// });
