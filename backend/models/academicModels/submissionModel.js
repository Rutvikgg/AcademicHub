const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    subjectType: {
      type: String,
      required: [true, 'Please provide type of submission'],
      enum: ['Experiment', 'Assignment'],
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      refPath: 'subjectType',
    },
    dateOfSubmission: { type: Date },
    status: {
      type: String,
      enum: ['Submitted', 'Not Submitted', 'Graded', 'Late'],
      default: 'Not Submitted',
    },
    submissionFile: String,
    feedback: String,
    marks: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;
