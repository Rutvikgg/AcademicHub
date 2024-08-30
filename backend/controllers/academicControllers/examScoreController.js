const ExamScore = require('../../models/academicModels/examScoreModel');
const factory = require('../handleFactory');

exports.getAllExamScores = factory.getAll(ExamScore);
exports.getExamScore = factory.getOne(ExamScore, [
  { path: 'exam' },
  { path: 'student' },
]);
exports.createExamScore = factory.createOne(ExamScore);
exports.updateExamScore = factory.updateOne(ExamScore);
exports.deleteExamScore = factory.deleteOne(ExamScore);
