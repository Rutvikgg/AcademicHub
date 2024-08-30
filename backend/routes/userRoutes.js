const express = require('express');
const adminController = require('../controllers/userControllers/adminController');
const authController = require('../controllers/authController');
const studentController = require('../controllers/userControllers/studentController');
const teachingStaffController = require('../controllers/userControllers/teachingStaffController');
const nonTeachingStaffController = require('../controllers/userControllers/nonTeachingStaffController');

const router = express.Router();

router.route('/login').post(authController.login);
router.route('/forget-password').post(authController.forgetPassword);
router.route('/reset-password/:token').post(authController.resetPassword);
router
  .route('/update-password')
  .post(authController.protect, authController.updatePassword);

// Only logged user can access this below endpoint.
router.use(authController.protect);

router
  .route('/student')
  .get(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    studentController.getAllStudents,
  )
  .post(
    authController.restrictTo('SystemAdmin', 'Admin'),
    studentController.createStudent,
  );

router
  .route('/student/:id')
  .get(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    studentController.getStudent,
  )
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin'),
    studentController.updateStudent,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin'),
    studentController.deleteStudent,
  );

router
  .route('/teaching-staff')
  .get(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    teachingStaffController.getAllTeachingStaff,
  )
  .post(
    authController.restrictTo('SystemAdmin', 'Admin'),
    teachingStaffController.createTeachingStaff,
  );

router
  .route('/teaching-staff/:id')
  .get(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    teachingStaffController.getTeachingStaff,
  )
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin'),
    teachingStaffController.updateTeachingStaff,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin'),
    teachingStaffController.deleteTeachingStaff,
  );

router
  .route('/non-teaching-staff')
  .get(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    nonTeachingStaffController.getAllNonTeachingStaff,
  )
  .post(
    authController.restrictTo('SystemAdmin', 'Admin'),
    nonTeachingStaffController.createNonTeachingStaff,
  );

router
  .route('/non-teaching-staff/:id')
  .get(
    authController.restrictTo(
      'SystemAdmin',
      'Admin',
      'TeachingStaff',
      'NonTeachingStaff',
    ),
    nonTeachingStaffController.getNonTeachingStaff,
  )
  .patch(
    authController.restrictTo('SystemAdmin', 'Admin'),
    nonTeachingStaffController.updateNonTeachingStaff,
  )
  .delete(
    authController.restrictTo('SystemAdmin', 'Admin'),
    nonTeachingStaffController.deleteNonTeachingStaff,
  );
////////////////////////////////////////////////////////////////////////
// System admin and admin has reading permission for admin endpoint.

router
  .route('/admin')
  .get(
    authController.restrictTo('SystemAdmin', 'Admin'),
    adminController.getAllAdmin,
  )
  .post(authController.restrictTo('SystemAdmin'), adminController.createAdmin);

router
  .route('/admin/:id')
  .get(
    authController.restrictTo('SystemAdmin', 'Admin'),
    adminController.getAdmin,
  )
  .patch(authController.restrictTo('SystemAdmin'), adminController.updateAdmin)
  .delete(
    authController.restrictTo('SystemAdmin'),
    adminController.deleteAdmin,
  );

////////////////////////////////////////////////////////////////////////
// Product has all permissions for System Admin And Product admin
router.use(authController.restrictTo('ProductAdmin'));

router
  .route('/system-admin')
  .get(adminController.getAllSystemAdmin)
  .post(adminController.createSystemAdmin);

router
  .route('/system-admin/:id')
  .get(adminController.getSystemAdmin)
  .patch(adminController.updateSystemAdmin)
  .delete(adminController.deleteSystemAdmin);

router
  .route('/product-admin')
  .get(adminController.getAllProductAdmin)
  .post(adminController.createProductAdmin);

router
  .route('/product-admin/:id')
  .get(adminController.getProductAdmin)
  .patch(adminController.updateProductAdmin)
  .delete(adminController.deleteProductAdmin);

module.exports = router;
