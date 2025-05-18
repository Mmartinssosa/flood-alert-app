const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const alertsRoutes = require('./routes/alerts');
const reportsRoutes = require('./routes/reports');
const sensorsRoutes = require('./routes/sensors');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/alerts', alertsRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/sensors', sensorsRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
});