/* eslint-disable prettier/prettier */
const fs = require("fs");
const db = require("../server/knex.js");
require("dotenv").config();

exports.seed = async function(knex) {
  try {
    const ultimateTable = JSON.parse(fs.readFileSync("./data/locations.json"));
    for (const location of ultimateTable) {
      const id = location.Site.SiteId;
      const latitude = location.Site.Latitude;
      const longitude = location.Site.Longitude;
      const name = location.Site.SiteName;
      const state = location.Addresses[0].State;
      const city = location.Addresses[0].City;
      const highway = location.Site.Highway;

      const result = await db("ultimateTable2").insert({
        id,
        latitude,
        longitude,
        name,
        state,
        city,
        highway,
      });
      console.log("from ultimateTable2", result);
    }
  } catch (err) {
    console.error("Error inserting records", err);
  }
};
