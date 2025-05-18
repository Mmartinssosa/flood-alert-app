import React from 'react';
import ReportForm from '../components/ReportForm';
import HistoricEvents from '../components/HistoricEvents';

const Reports = () => (
  <div>
    <h1>Reportar Inundación</h1>
    <ReportForm />
    <h2>Eventos Históricos</h2>
    <HistoricEvents />
  </div>
);

export default Reports;