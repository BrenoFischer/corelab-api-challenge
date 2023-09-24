import fastify from "fastify";
import { env } from "./env";
import { notesRoutes } from "./routes/notes";

const app = fastify();

app.register(notesRoutes, {
  prefix: "notes",
});

app
  .listen({
    port: env.PORT,
  })
  .then(function () {
    console.log("HTTP server running!");
  });
