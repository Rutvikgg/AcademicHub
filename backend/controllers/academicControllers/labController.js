const Lab = require('../../models/academicModels/labModel');
const factory = require('../handleFactory');

exports.getAllLabs = factory.getAll(Lab);
exports.getLab = factory.getOne(Lab, [
  { path: 'course', select: 'courseCode name' },
  { path: 'department', select: 'name' },
  { path: 'teachersIncharge', select: 'firstName' },
  { path: 'labAssistants', select: 'firstName' },
]);
exports.createLab = factory.createOne(Lab);
exports.updateLab = factory.updateOne(Lab);
exports.deleteLab = factory.deleteOne(Lab);
