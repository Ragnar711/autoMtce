// import request from "supertest";
// import { start } from "../../app";

// const app = start();

// describe("POST /checklist", () => {
//     it("should create a document", async () => {
//         const payload = {
//             organe: "Organe 4",
//             operations: ["operation1", "operation2"],
//         };

//         const response = await request(app)
//             .post("/checklist")
//             .send(payload)
//             .expect(201);

//         expect(response.body).toHaveProperty("organe");
//         expect(response.body).toHaveProperty("operations");
//         expect(response.body).toHaveProperty("deleted");

//         expect(response.body.operations).toBeInstanceOf(Array);
//         expect(response.body.operations.length).toBeGreaterThan(0);
//     });
// });
