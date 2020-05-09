import { getLocationsFromApi } from "../utils";

export function getLocations() {
  return async (dispatch) => {
    const locations = await getLocationsFromApi();
    dispatch(setLocations(locations));
  };
}
// console.log("hello from actions/index.js");
function setLocations(locations) {
  console.log("inside actions/index, setLocations()", locations);
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}

export function getFilterState(stateName) {
  console.log(
    "actions/index.js,getFilterState() this is stateName:",
    stateName
  );

  return async (dispatch) => {
    dispatch(filterState(stateName));
  };
}

// new action for filter by state dispatch
function filterState(stateName) {
  console.log("actions/index.js, filterState() this is stateName:", stateName);
  return {
    type: "FILTER_STATE",
    stateName,
  };
}

// FILTER BY CITY

export function getFilterCity(cityName) {
  console.log("actions/index.js,getFilterCity() this is cityName:", cityName);

  return async (dispatch) => {
    dispatch(filterCity(cityName));
  };
}

// new action for filter by state dispatch
function filterCity(cityName) {
  console.log("actions/index.js, filterCity() this is cityName:", cityName);
  return {
    type: "FILTER_CITY",
    cityName,
  };
}
