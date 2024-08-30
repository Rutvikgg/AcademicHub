const Resource = require('../../models/academicModels/resourceModel');
const factory = require('../handleFactory');

exports.getAllResources = factory.getAll(Resource);
exports.getResource = factory.getOne(Resource, [
  { path: 'subject' },
  { path: 'uploadedBy' },
]);
exports.createResource = factory.createOne(Resource);
exports.updateResource = factory.updateOne(Resource);
exports.deleteResource = factory.deleteOne(Resource);
