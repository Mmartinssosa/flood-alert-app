const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Alert = sequelize.define('Alert', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  severity: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.GEOGRAPHY('POINT', 4326), allowNull: false },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Alert;