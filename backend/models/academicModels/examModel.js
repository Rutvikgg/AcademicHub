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
      enum: ['Course', 'Lab'],
      default: 'Course',
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      refPath: 'subjectType',
    },
    year: {
      type: Number,
      required: [true, 'Please provide year of the course.'],
      min: 1,
      max: 6,
    },
    semester: {
      type: Number,
      required: [true, 'Please provide semester of the course.'],
      min: 1,
      max: 12,
    },
    examDate: {
      type: Date,
      required: [true, 'Please provide date of examination'],
    },
    marks: {
      type: Number,
      required: [true, 'Please provide the total marks for examination'],
    },
    startTime: Date,
    endTime: Date,
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
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

  this.updatedAt = new Date();
  next();
});

examSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
