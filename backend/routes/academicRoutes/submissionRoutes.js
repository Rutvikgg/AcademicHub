const express = require('express');
const authController = require('../../controllers/authController');
const submissionController = require('../../controllers/academicControllers/submissionController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(submissionController.getAllSubmissions)
  .post(
    authController.restrictTo('Student'),
    submissionController.createSubmission,
  );

router
  .route('/:id')
  .get(submissionController.getSubmission)
  .patch(submissionController.updateSubmission)
  .delete(submissionController.deleteSubmission);

module.exports = router;
