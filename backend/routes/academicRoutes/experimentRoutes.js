const express = require('express');
const authController = require('../../controllers/authController');
const experimentController = require('../../controllers/academicControllers/experimentController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(experimentController.getAllExperiments)
  .post(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    experimentController.createExperiment,
  );

router
  .route('/:id')
  .get(experimentController.getExperiment)
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    experimentController.updateExperiment,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    experimentController.deleteExperiment,
  );

module.exports = router;
