import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
console.log("HELLO FROM MAP.JSX");
const MyMap = withGoogleMap((props) => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker) => (
      <Marker
        key={marker.key}
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

// We use object destructuring here to shorten our code
export default function Map({ locations, getLocations, filteredByState }) {
  const changeLength = locations.length <= 0;
  console.log("this is changeLength:", changeLength);
  useEffect(() => {
    if (changeLength) {
      console.log(
        "this is changeLength INSIDE useEffect, getLocations() coming next line:",
        changeLength
      );

      getLocations();
    }
  }, [changeLength, getLocations]);

  if (filteredByState.length === 0) {
    //default map with all the markers
    return (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={locations}
        onMarkerRightClick={() => {}}
      />
    );
  }
  return (
    <MyMap
      className="test"
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      onMapLoad={() => {}}
      onMapClick={() => {}}
      markers={filteredByState}
      onMarkerRightClick={() => {}}
    />
  );
}

// This looks new? Can you guess what this does?
Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
  filteredByState: PropTypes.array.isRequired,
};
