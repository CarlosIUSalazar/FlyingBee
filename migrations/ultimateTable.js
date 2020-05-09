exports.up = function(knex) {
  return knex.schema.createTable("ultimateTable", (table) => {
    table.increments().index();

    table.float("latitude");

    table.float("longitude");

    table.text("name").notNullable();

    table.text("siteId");

    table.text("state");

    table.text("city");

    table.text("highway");
  });
};

exports.down = function(knex, Promise) {};

// ID | STATE | CITY | HIGHWAY | SITE NAME | SITE ID //
