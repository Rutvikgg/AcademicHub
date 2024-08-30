const express = require('express');
const authController = require('../../controllers/authController');
const courseController = require('../../controllers/academicControllers/courseController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(courseController.getAllCourses)
  .post(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    courseController.createCourse,
  );

router
  .route('/:id')
  .get(courseController.getCourse)
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    courseController.updateCourse,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin', 'TeachingStaff'),
    courseController.deleteCourse,
  );

module.exports = router;
