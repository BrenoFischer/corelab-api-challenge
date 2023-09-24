import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("production"),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
});

// Zod will validate if the data from process.env matches the schema
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment variables!");
  throw new Error("Invalid environment variables.");
}

export const env = _env.data;
