import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
//import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// const StateArray = ["California", "Texas", "Oregon"];
// const CityArray = ["Los Angeles", "Austin", "Portland"];
// const highwayArray = ["Highway 54", "State 1 Hwy", "Rancho Viejo Hwy"];
// console.log("this is locations from FilterState.jsx", locations);

export default function FilterState({
  locations,
  getFilterState,
  getFilterCity,
}) {
  const changeLength = locations.length <= 0;
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  // useEffect(() => {
  //   if (changeLength) {
  //     getLocations();
  //   }
  // }, [changeLength, getLocations]);

  // FILTERING UNIQUE STATES FOR <SELECT>
  let allStates = locations.map((obj) => {
    return obj.state;
  });

  let filteredStates = allStates.filter(function(item, pos) {
    return allStates.indexOf(item) === pos;
  });
  filteredStates.unshift("STATES");

  // CITY ARRAY FILTERED BY SELECTED STATE

  let filteredCities = locations
    .filter((obj) => {
      console.log("this is selectedState", selectedState);
      return obj.state === selectedState;
    })
    .filter((e) => e.city)
    .map((e) => e.city)
    .filter(function(item, pos, array) {
      return array.indexOf(item) === pos;
    });
  filteredCities.unshift("CITY");

  return (
    <div id="locations" className="dropdown">
      <label className="dropdown">Locations:</label>
      {/* STATE SELECT */}
      <select
        name="State"
        className="dropdown"
        onChange={(e) => {
          setSelectedState(e.target.value);
          // capture the state choice here
          getFilterState(e.target.value);
        }}
      >
        {filteredStates.map((stop, index) => {
          return (
            <option value={stop} key={index}>
              {stop}
            </option>
          );
        })}
      </select>
      {/* CITY SELECT */}
      <select
        name="City"
        className="dropdown"
        onChange={(e) => {
          setSelectedCity(e.target.value);
          // capture the city choice here
          getFilterCity(e.target.value);
        }}
      >
        {filteredCities.map((stop, index) => {
          return (
            <option value="City" key={index}>
              {stop}
            </option>
          );
        })}
      </select>
      {/* HIGHWAY SELECT */}
      {/* <select name="Highway" className="dropdown">
        {highwayArray.map((stop, index) => {
          return (
            <option value="Highway" key={index}>
              {stop}
            </option>
          );
        })}
      </select> */}
    </div>
  );
}

FilterState.propTypes = {
  getFilterState: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

// // We use object destructuring here to shorten our code
// export default function Map({ locations, getLocations }) {
//   const changeLength = locations.length <= 0;
//   useEffect(() => {
//     if (changeLength) {
//       getLocations();
//     }
//   }, [changeLength, getLocations]);

//   return (
//     <MyMap
//       className="test"
//       containerElement={<div style={{ height: `100%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//       onMapLoad={() => {}}
//       onMapClick={() => {}}
//       markers={locations}
//       onMarkerRightClick={() => {}}
//     />
//   );
// }

// // This looks new? Can you guess what this does?
