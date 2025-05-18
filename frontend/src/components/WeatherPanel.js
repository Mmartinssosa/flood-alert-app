import React, { useEffect, useState } from "react";
import { getWeather } from "../utils/weatherApi";

export default function WeatherPanel() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then(setWeather);
  }, []);

  if (!weather) return <p>Obteniendo pronóstico...</p>;
  return (
    <div className="weather-panel">
      <p>
        <strong>Clima actual:</strong> {weather.temp}°C, {weather.desc}
        <img src={weather.icon} alt={weather.desc} style={{ verticalAlign: "middle" }} />
      </p>
      <p><strong>Ciudad:</strong> {weather.city}</p>
    </div>
  );
}
