import React from "react";
import MapView from "../components/MapView";
import WeatherPanel from "../components/WeatherPanel";
import ReportList from "../components/ReportList";

const Home = () => (
  <div className="main-container">
    <h1>Flood Alert: Zona Sur</h1>
    <WeatherPanel />
    <MapView />
    <ReportList />
  </div>
);

export default Home;
