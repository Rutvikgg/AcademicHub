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
      default: Date.now,
    },
    dateOfSubmission: {
      type: Date,
      required: [true, 'Please provide a due date for the assignment'],
    },
    subjectType: {
      type: String,
      enum: ['Course', 'Lab'],
      default: 'Lab',
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

assignmentSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

assignmentSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});
const Assignment = mongoose.model('Assignment', assignmentSchema);

module.exports = Assignment;
