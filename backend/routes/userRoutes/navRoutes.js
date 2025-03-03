const express = require('express');
const authController = require('../../controllers/authController');
const navController = require('../../controllers/userControllers/navController');

const router = express.Router();

router.route('/').get(authController.protect, navController.getNav);

module.exports = router;
