import React, { useState } from 'react';
import axios from 'axios';

const ReportForm = () => {
  const [user, setUser] = useState('');
  const [description, setDescription] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/reports`, {
      user,
      description,
      location: {
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)]
      }
    });
    setUser('');
    setDescription('');
    setLat('');
    setLng('');
    alert('¡Reporte enviado!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Tu nombre" value={user} onChange={e => setUser(e.target.value)} required />
      <textarea placeholder="Descripción" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="number" placeholder="Latitud" value={lat} onChange={e => setLat(e.target.value)} required />
      <input type="number" placeholder="Longitud" value={lng} onChange={e => setLng(e.target.value)} required />
      <button type="submit">Enviar Reporte</button>
    </form>
  );
};

export default ReportForm;