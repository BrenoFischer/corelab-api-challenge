import fastify from "fastify";
import crypto from "node:crypto";
import { knex } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/hello", async () => {
  const note = await knex("notes")
    .insert({
      id: crypto.randomUUID(),
      title: "Nova nota teste",
      body: "Essa nota é um teste",
      favourite: false,
    })
    .returning("*");
});

app
  .listen({
    port: env.PORT,
  })
  .then(function () {
    console.log("HTTP server running!");
  });
