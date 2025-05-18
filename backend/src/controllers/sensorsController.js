const { Sensor } = require('../models');

exports.getSensors = async (req, res) => {
  const sensors = await Sensor.findAll();
  res.json(sensors);
};

exports.createSensor = async (req, res) => {
  const sensor = await Sensor.create(req.body);
  res.status(201).json(sensor);
};