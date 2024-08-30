const express = require('express');
const authController = require('../../controllers/authController');
const assignmentController = require('../../controllers/academicControllers/assignmentController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(assignmentController.getAllAssignments)
  .post(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    assignmentController.createAssignment,
  );

router
  .route('/:id')
  .get(assignmentController.getAssignment)
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    assignmentController.updateAssignment,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    assignmentController.deleteAssignment,
  );

module.exports = router;
