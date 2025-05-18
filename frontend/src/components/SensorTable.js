import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SensorTable = () => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sensors`)
      .then(res => setSensors(res.data));
  }, []);

  return (
    <div>
      <h2>Sensores</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {sensors.map(sensor => (
            <tr key={sensor.id}>
              <td>{sensor.name}</td>
              <td>{sensor.type}</td>
              <td>{sensor.value}</td>
              <td>{sensor.location ? `${sensor.location.coordinates[1]}, ${sensor.location.coordinates[0]}` : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorTable;