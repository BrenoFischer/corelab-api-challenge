import crypto from "node:crypto";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { knex } from "../database";

export async function notesRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const notes = await knex("notes").select();

    return { notes };
  });

  app.get("/:id", async (request) => {
    const getNoteParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getNoteParamsSchema.parse(request.params);

    const note = await knex("notes").where("id", id).first();

    return { note };
  });

  app.post("/", async (request, reply) => {
    const createNoteBodySchema = z.object({
      title: z.string(),
      body: z.string(),
      favourite: z.boolean(),
    });

    const { title, body, favourite } = createNoteBodySchema.parse(request.body);

    await knex("notes").insert({
      id: crypto.randomUUID(),
      title,
      body,
      favourite,
      color: "#FFF",
    });

    return reply.status(201).send();
  });

  app.delete("/:id", async (request, reply) => {
    const getNoteParamsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = getNoteParamsSchema.parse(request.params);
    await knex("notes").where("id", id).del();

    return reply.status(202).send();
  });
}
