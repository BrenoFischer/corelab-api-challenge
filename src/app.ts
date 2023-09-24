import fastify from "fastify";
import { notesRoutes } from "./routes/notes";

export const app = fastify();

app.register(notesRoutes, {
  prefix: "notes",
});
