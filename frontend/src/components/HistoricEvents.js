import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HistoricEvents = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/reports`)
      .then(res => setReports(res.data));
  }, []);

  return (
    <div>
      <ul>
        {reports.slice(0, 10).map(report => (
          <li key={report.id}>
            <strong>{report.user}</strong> ({new Date(report.timestamp).toLocaleString()}): {report.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricEvents;