const Group = require('../../models/instituteModels/groupModel');
const factory = require('../handleFactory');

exports.getAllGroups = factory.getAll(Group);
exports.getGroup = factory.getOne(Group, [
  { path: 'institute', select: 'name' },
  { path: 'groupIncharge', select: 'instituteAllottedId firstName' },
  { path: 'department', select: 'name' },
  { path: 'members', select: 'instituteAllottedId firstName' },
]);
exports.createGroup = factory.createOne(Group);
exports.updateGroup = factory.updateOne(Group);
exports.deleteGroup = factory.deleteOne(Group);
