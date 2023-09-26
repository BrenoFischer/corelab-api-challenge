import { Knex } from "knex";

declare module "knex/types/tables" {
  export interface Tables {
    notes: {
      id: string;
      title: string;
      body: string;
      favourite: boolean;
      color: string;
    };
  }
}
