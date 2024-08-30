const express = require('express');
const authController = require('../../controllers/authController');
const groupController = require('../../controllers/instituteControllers/groupController');

const router = express.Router();

router.use(authController.protect);

router.use(
  authController.restrictTo(
    'SystemAdmin',
    'Admin',
    'TeachingStaff',
    'NonTeachingStaff',
  ),
);

router
  .route('/')
  .get(groupController.getAllGroups)
  .post(groupController.createGroup);

router
  .route('/:id')
  .get(groupController.getGroup)
  .patch(groupController.updateGroup)
  .delete(groupController.deleteGroup);

module.exports = router;
