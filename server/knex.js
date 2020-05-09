/* eslint-disable prettier/prettier */
const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}:${process.env.PASS}@127.0.0.1:5432/flyingbeetruckstop`,
  searchPath: "public",
  // migrations: {
  //   directory: "./migrations",
  // },
});
module.exports = db;
