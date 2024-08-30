const express = require('express');
const authController = require('../../controllers/authController');
const examScoreController = require('../../controllers/academicControllers/examScoreController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(examScoreController.getAllExamScores)
  .post(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    examScoreController.createExamScore,
  );

router
  .route('/:id')
  .get(examScoreController.getExamScore)
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    examScoreController.updateExamScore,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    examScoreController.deleteExamScore,
  );

module.exports = router;
