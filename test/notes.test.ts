import { it, expect, beforeAll, afterAll, describe, beforeEach } from "vitest";
import { execSync } from "node:child_process";
import { app } from "../src/app";
import request from "supertest";

describe("Notes routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    execSync("npm run knex migrate:rollback --all");
    execSync("npm run knex migrate:latest");
  });

  it("should be able to create a new note", async () => {
    await request(app.server)
      .post("/notes")
      .send({
        title: "New note test",
        body: "Note body",
        favourite: false,
        color: "#FFF",
      })
      .expect(201);
  });

  it("should be able to list all notes", async () => {
    await request(app.server)
      .post("/notes")
      .send({ title: "New note test", body: "Note body", favourite: false });

    const listNotesReponse = await request(app.server)
      .get("/notes")
      .expect(200);

    expect(listNotesReponse.body.notes).toEqual([
      expect.objectContaining({
        title: "New note test",
        body: "Note body",
        favourite: 0,
        color: "#FFF",
      }),
    ]);
  });

  it("should be able to list a specific note", async () => {
    await request(app.server)
      .post("/notes")
      .send({ title: "New note test", body: "Note body", favourite: false });

    const listNotesReponse = await request(app.server)
      .get("/notes")
      .expect(200);

    const noteId = listNotesReponse.body.notes[0].id;

    const getNoteReponse = await request(app.server)
      .get(`/notes/${noteId}`)
      .expect(200);

    expect(getNoteReponse.body.note).toEqual(
      expect.objectContaining({
        title: "New note test",
        body: "Note body",
        favourite: 0,
        color: "#FFF",
      }),
    );
  });

  it("should be able to delete a specific note", async () => {
    await request(app.server)
      .post("/notes")
      .send({ title: "New note test", body: "Note body", favourite: false });

    const listNotesReponse = await request(app.server)
      .get("/notes")
      .expect(200);

    const noteId = listNotesReponse.body.notes[0].id;

    await request(app.server).delete(`/notes/${noteId}`).expect(202);
  });

  it("should be able to update a specific note", async () => {
    await request(app.server).post("/notes").send({
      title: "New note test",
      body: "Note body",
      favourite: false,
      color: "#FFF",
    });

    const listNotesReponse = await request(app.server)
      .get("/notes")
      .expect(200);

    const noteId = listNotesReponse.body.notes[0].id;

    await request(app.server)
      .patch(`/notes/${noteId}`)
      .send({
        title: "Update note",
        body: "Note body",
        favourite: true,
        color: "#000",
      })
      .expect(204);

    const getNoteReponse = await request(app.server)
      .get(`/notes/${noteId}`)
      .expect(200);

    expect(getNoteReponse.body.note).toEqual(
      expect.objectContaining({
        title: "Update note",
        body: "Note body",
        favourite: 1,
        color: "#000",
      }),
    );
  });
});
