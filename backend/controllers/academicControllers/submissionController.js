const Submission = require('../../models/academicModels/submissionModel');
const factory = require('../handleFactory');

exports.getAllSubmissions = factory.getAll(Submission);
exports.getSubmission = factory.getOne(Submission, [
  { path: 'student', select: 'instituteAllottedId firstName' },
  { path: 'subject' },
]);
exports.createSubmission = factory.createOne(Submission);
exports.updateSubmission = factory.updateOne(Submission);
exports.deleteSubmission = factory.deleteOne(Submission);
