const mongoose = require('mongoose');

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the name of the examination'],
    },
    description: String,
    subjectType: {
      type: String,
      required: [true, 'Please provide type of examination'],
      enum: ['Course', 'Lab'],
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      refPath: 'subjectType',
    },
    examDate: {
      type: Date,
      required: [true, 'Please provide date of examination'],
    },
    marks: {
      type: Number,
      required: [true, 'Please provide the total marks for examination'],
    },
    duration: Number,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

examSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = Date.now();
  next();
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
