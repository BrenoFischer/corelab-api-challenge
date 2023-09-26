import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("notes", (table) => {
    table.string("color");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.table("notes", (table) => {
    table.dropColumn("color");
  });
}
