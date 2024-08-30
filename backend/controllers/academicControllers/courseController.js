const Course = require('../../models/academicModels/courseModel');
const factory = require('../handleFactory');

exports.getAllCourses = factory.getAll(Course);
exports.getCourse = factory.getOne(Course, [
  { path: 'department', select: 'name' },
  { path: 'teachersIncharge', select: 'instituteAllottedId firstName' },
]);
exports.createCourse = factory.createOne(Course);
exports.updateCourse = factory.updateOne(Course);
exports.deleteCourse = factory.deleteOne(Course);
