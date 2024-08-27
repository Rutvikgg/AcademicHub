const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name of the assignment'],
    },
    instruction: String,
    dateOfPerformance: {
      type: Date,
      default: Date.now(),
    },
    dateOfSubmission: {
      type: Date,
      required: [true, 'Please provide a due date for the assignment'],
    },
    subjectType: {
      type: String,
      required: true,
      enum: ['Course', 'Lab'],
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      refPath: 'subjectType',
    },
    marks: {
      type: Number,
      required: [true, 'Please provide the total marks for the assignment'],
    },
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

assignmentSchema.pre('save', function (next) {
  if (this.isnew) return next();

  this.updatedAt = Date.now();
  next();
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
