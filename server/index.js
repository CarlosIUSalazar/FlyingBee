/* eslint-disable prettier/prettier */
const app = require("./app");
const db = require("./knex");

const PORT = process.env.PORT || 9000;

(async () => {
  try {
    console.log("Running migrations...");
    await db.migrate.latest();
    ///Seed here
    //  console.log("Seeding data...");
    // we ran the line below once in order to initially seed the database
    // await db.seed.run();
    // once the database was seeded from the line above we commented it out in order to avoid duplicates
    console.log("Seeding has previously been done.");
    console.log("Starting express...");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
