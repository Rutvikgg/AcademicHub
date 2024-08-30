const Assignment = require('../../models/academicModels/assignmentModel');
const factory = require('../handleFactory');

exports.getAllAssignments = factory.getAll(Assignment);
exports.getAssignment = factory.getOne(Assignment, { path: 'subject' });
exports.createAssignment = factory.createOne(Assignment);
exports.updateAssignment = factory.updateOne(Assignment);
exports.deleteAssignment = factory.deleteOne(Assignment);
