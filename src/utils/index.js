import axios from "axios";

export async function getLocationsFromApi() {
  const { data: locations } = await axios.get("/api/ultimateTable2"); // ES6 destructuring & aliasing
  const s = locations.map((l) => ({
    position: {
      lat: l.latitude,
      lng: l.longitude,
    },
    key: l.name,
    defaultAnimation: 2,
    state: l.state,
    city: l.city,
    highway: l.highway,
  }));
  return s;
}
