const express = require('express');
const authController = require('../../controllers/authController');
const labController = require('../../controllers/academicControllers/labController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(labController.getAllLabs)
  .post(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    labController.createLab,
  );

router
  .route('/:id')
  .get(labController.getLab)
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    labController.updateLab,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    labController.deleteLab,
  );

module.exports = router;
