const Exam = require('../../models/academicModels/examModel');
const factory = require('../handleFactory');

exports.getAllExams = factory.getAll(Exam);
exports.getExam = factory.getOne(Exam, { path: 'subject' });
exports.createExam = factory.createOne(Exam);
exports.updateExam = factory.updateOne(Exam);
exports.deleteExam = factory.deleteOne(Exam);
