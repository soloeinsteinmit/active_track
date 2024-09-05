/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password_hash").notNullable();
      table.float("weight");
      table.float("height");
      table.integer("age");
    })
    .createTable("vitals", (table) => {
      table.integer("id").unsigned().references("id").inTable("user");
      table.string("datetime").notNullable();
      table.integer("heart_rate");
      table.integer("spo2");
      table.float("temperature");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("vitals").dropTableIfExists("user");
}
