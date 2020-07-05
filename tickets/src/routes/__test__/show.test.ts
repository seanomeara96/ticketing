import request from "supertest";
import { app } from "../../app";
it("returns a 404 if the ticket is not found", async () => {
  await request(app).post("blah").send({}).expect(200);
});
it("returns the ticket if the ticket is found");
