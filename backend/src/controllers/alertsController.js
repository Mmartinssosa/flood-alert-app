const { Alert } = require('../models');

exports.getAlerts = async (req, res) => {
  const alerts = await Alert.findAll({ order: [['timestamp', 'DESC']] });
  res.json(alerts);
};

exports.createAlert = async (req, res) => {
  const alert = await Alert.create(req.body);
  res.status(201).json(alert);
};