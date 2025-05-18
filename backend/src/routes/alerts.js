const express = require('express');
const router = express.Router();
const { getAlerts, createAlert } = require('../controllers/alertsController');

router.get('/', getAlerts);
router.post('/', createAlert);

module.exports = router;