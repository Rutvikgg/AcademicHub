const factory = require('../handleFactory');
const NonTeachingStaff = require('../../models/userModels/nonTeachingStaffModel');

exports.getAllNonTeachingStaff = factory.getAll(NonTeachingStaff);
exports.getNonTeachingStaff = factory.getOne(NonTeachingStaff);
exports.createNonTeachingStaff = factory.createOne(
  NonTeachingStaff,
  'NonTeachingStaff',
);
exports.updateNonTeachingStaff = factory.updateOne(
  NonTeachingStaff,
  'NonTeachingStaff',
);
exports.deleteNonTeachingStaff = factory.deleteOne(NonTeachingStaff);
