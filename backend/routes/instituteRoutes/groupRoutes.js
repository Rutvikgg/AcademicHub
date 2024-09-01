const express = require('express');
const authController = require('../../controllers/authController');
const groupController = require('../../controllers/instituteControllers/groupController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(groupController.getAllGroups)
  .post(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    groupController.createGroup,
  );

router
  .route('/:id')
  .get(groupController.getGroup)
  .patch(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    groupController.updateGroup,
  )
  .delete(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    groupController.deleteGroup,
  );

module.exports = router;
