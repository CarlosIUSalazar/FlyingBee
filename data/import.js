/* eslint-disable prettier/prettier */
const fs = require("fs");
const db = require("../server/knex.js");
require("dotenv").config();

(async () => {
  try {
    const locations = JSON.parse(fs.readFileSync("./locations.json"));
    for (const location of locations) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;

      const result = await db("locations").insert({
        id,
        latitude,
        longitude,
        name,
      });
      console.log("CAN YOU SEE ME????", result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
})();
