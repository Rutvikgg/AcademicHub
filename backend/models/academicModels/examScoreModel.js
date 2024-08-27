const mongoose = require('mongoose');

const examScoreSchema = new mongoose.Schema(
  {
    exam: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Exam',
    },
    student: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Student',
    },
    marks: {
      type: Number,
      required: [true, 'Please enter the marks of exam'],
    },
    remark: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const ExamScore = mongoose.model('ExamScore', examScoreSchema);

module.exports = ExamScore;
