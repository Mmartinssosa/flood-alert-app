import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const DEFAULT_POSITION = [ -34.6, -58.4 ]; // Ejemplo: Buenos Aires

const MapView = () => {
  const [reports, setReports] = useState([]);
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/reports`)
      .then(res => setReports(res.data));
    axios.get(`${process.env.REACT_APP_API_URL}/sensors`)
      .then(res => setSensors(res.data));
  }, []);

  const getLatLng = geo => geo ? [geo.coordinates[1], geo.coordinates[0]] : DEFAULT_POSITION;

  return (
    <div style={{ height: 400, marginBottom: 20 }}>
      <MapContainer center={DEFAULT_POSITION} zoom={12} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {reports.map(report => (
          <Marker key={report.id} position={getLatLng(report.location)}>
            <Popup>
              <strong>{report.user}</strong>: {report.description}
            </Popup>
          </Marker>
        ))}
        {sensors.map(sensor => (
          <Marker key={sensor.id} position={getLatLng(sensor.location)}>
            <Popup>
              Sensor: {sensor.name} <br />
              Tipo: {sensor.type} <br />
              Valor: {sensor.value}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;