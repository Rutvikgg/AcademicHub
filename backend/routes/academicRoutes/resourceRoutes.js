const express = require('express');
const authController = require('../../controllers/authController');
const resourceController = require('../../controllers/academicControllers/resourceController');

const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .get(resourceController.getAllResources)
  .post(resourceController.createResource);

router
  .route('/:id')
  .get(resourceController.getResource)
  .patch(resourceController.updateResource)
  .delete(resourceController.deleteResource);

module.exports = router;
