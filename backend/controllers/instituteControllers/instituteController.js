const Institute = require('../../models/instituteModels/instituteModel');
const factory = require('../handleFactory');

exports.getAllInstitutes = factory.getAll(Institute);
exports.getInstitute = factory.getOne(Institute);
exports.createInstitute = factory.createOne(Institute);
exports.updateInstitute = factory.updateOne(Institute);
exports.deleteInstitute = factory.deleteOne(Institute);
