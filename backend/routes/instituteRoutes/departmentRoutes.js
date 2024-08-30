const express = require('express');
const authController = require('../../controllers/authController');
const departmentController = require('../../controllers/instituteControllers/departmentController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(
    authController.restrictTo('SystemAdmin', 'Admin'),
    departmentController.getAllDepartments,
  )
  .post(
    authController.restrictTo('SystemAdmin'),
    departmentController.createDepartment,
  );

router
  .route('/:id')
  .get(
    authController.restrictTo('SystemAdmin', 'Admin'),
    departmentController.getDepartment,
  )
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin'),
    departmentController.updateDepartment,
  )
  .delete(
    authController.restrictTo('SystemAdmin'),
    departmentController.deleteDepartment,
  );

module.exports = router;
