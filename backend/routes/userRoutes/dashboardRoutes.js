const express = require('express');
const authController = require('../../controllers/authController');
const dashboardController = require('../../controllers/userControllers/dashboardController');

const router = express.Router();

router.route('/').get(authController.protect, dashboardController.getDashboard);

module.exports = router;
