const Department = require('../../models/instituteModels/departmentModel');
const factory = require('../handleFactory');

exports.getAllDepartments = factory.getAll(Department);
exports.getDepartment = factory.getOne(Department, [
  { path: 'headOfDepartment', select: 'firstName lastName email' },
  { path: 'institute', select: 'name email' },
]);
exports.createDepartment = factory.createOne(Department);
exports.updateDepartment = factory.updateOne(Department);
exports.deleteDepartment = factory.deleteOne(Department);
