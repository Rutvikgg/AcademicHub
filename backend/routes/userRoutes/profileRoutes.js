const express = require('express');
const authController = require('../../controllers/authController');
const profileController = require('../../controllers/userControllers/profileController');

const router = express.Router();

router.route('/').get(authController.protect, profileController.getProfile);

module.exports = router;
