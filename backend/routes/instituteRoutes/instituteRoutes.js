const express = require('express');
const instituteController = require('../../controllers/instituteControllers/instituteController');
const authController = require('../../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(
    authController.restrictTo('ProductAdmin'),
    instituteController.getAllInstitutes,
  )
  .post(
    authController.restrictTo('ProductAdmin'),
    instituteController.createInstitute,
  );

router
  .route('/:id')
  .get(
    authController.restrictTo('ProductAdmin', 'SystemAdmin'),
    instituteController.getInstitute,
  )
  .patch(
    authController.restrictTo('ProductAdmin', 'SystemAdmin'),
    instituteController.updateInstitute,
  )
  .delete(
    authController.restrictTo('ProductAdmin'),
    instituteController.deleteInstitute,
  );

module.exports = router;
