const factory = require('../handleFactory');
const TeachingStaff = require('../../models/userModels/teachingStaffModel');

exports.getAllTeachingStaff = factory.getAll(TeachingStaff);
exports.getTeachingStaff = factory.getOne(TeachingStaff);
exports.createTeachingStaff = factory.createOne(TeachingStaff, 'TeachingStaff');
exports.updateTeachingStaff = factory.updateOne(TeachingStaff, 'TeachingStaff');
exports.deleteTeachingStaff = factory.deleteOne(TeachingStaff);
