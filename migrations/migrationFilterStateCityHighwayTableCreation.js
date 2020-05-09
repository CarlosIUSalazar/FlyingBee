exports.up = function(knex) {
  return knex.schema.createTable("filterstatecityhighway", (table) => {
    table.increments().index();

    table.float("siteid");

    table.text("state");

    table.text("city");

    table.text("sitename").notNullable();
  });
};

exports.down = function(knex, Promise) {};

// ID | STATE | CITY | HIGHWAY | SITE NAME | SITE ID //
