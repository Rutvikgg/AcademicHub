const Experiment = require('../../models/academicModels/experimentModel');
const factory = require('../handleFactory');

exports.getAllExperiments = factory.getAll(Experiment);
exports.getExperiment = factory.getOne(Experiment, { path: 'subject' });
exports.createExperiment = factory.createOne(Experiment);
exports.updateExperiment = factory.updateOne(Experiment);
exports.deleteExperiment = factory.deleteOne(Experiment);
