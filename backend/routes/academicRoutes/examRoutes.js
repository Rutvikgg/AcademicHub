const express = require('express');
const authController = require('../../controllers/authController');
const examController = require('../../controllers/academicControllers/examController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(examController.getAllExams)
  .post(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    examController.createExam,
  );

router
  .route('/:id')
  .get(examController.getExam)
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    examController.updateExam,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    examController.deleteExam,
  );

module.exports = router;
