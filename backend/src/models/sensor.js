const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Sensor = sequelize.define('Sensor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.FLOAT, allowNull: false },
  type: { type: DataTypes.STRING, allowNull: false }, // Ej: "nivel_agua", "lluvia"
  location: { type: DataTypes.GEOGRAPHY('POINT', 4326), allowNull: false },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Sensor;