import fastify from "fastify";
import cors from "@fastify/cors";
import { notesRoutes } from "./routes/notes";

export const app = fastify();

app.register(notesRoutes, {
  prefix: "notes",
});

app.register(cors, {
  origin: true,
});
