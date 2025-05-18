const Alert = require('./alert');
const Report = require('./report');
const Sensor = require('./sensor');

// Relaciones si las necesitas (ejemplo):
// Report.belongsTo(Alert);
// Alert.hasMany(Report);

module.exports = {
  Alert,
  Report,
  Sensor
};