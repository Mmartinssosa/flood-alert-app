import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertList = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/alerts`)
      .then(res => setAlerts(res.data));
  }, []);

  return (
    <div>
      <h2>Alertas Recientes</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            <strong>{alert.title}:</strong> {alert.description}
            <span> ({alert.severity})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertList;