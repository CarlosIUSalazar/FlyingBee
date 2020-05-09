import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./containers/Map";
import FilterState from "./containers/FilterState";

require("dotenv").config();

export default function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>🐝Welcome to BeeHive🐝</h2>
      </div>
      <p className="App-intro">
        {/* To get started, edit <code>src/App.jsx</code> and save to reload. */}
        Feel the Buzz
      </p>
      <Map id="map" />
      <FilterState />
    </div>
  );
}
