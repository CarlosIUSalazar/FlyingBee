exports.up = function(knex) {
  return knex.schema.createTable("ultimateTable2", (table) => {
    table.increments().index();

    table.float("latitude");

    table.float("longitude");

    table.text("name").notNullable();

    table.text("state");

    table.text("city");

    table.text("highway");
  });
};

exports.down = function(knex, Promise) {};
