const mongoose = require('mongoose');

const experimentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name of the experiment'],
    },
    instruction: String,
    dateOfPerformance: {
      type: Date,
      default: Date.now(),
    },
    dateOfSubmission: {
      type: Date,
      required: [true, 'Please provide a date of submission for experiment'],
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Lab',
    },
    marks: {
      type: Number,
      required: [true, 'Please provide the total marks for the experiment'],
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

experimentSchema.pre('save', function (next) {
  if (this.isnew) return next();

  this.updatedAt = Date.now();
  next();
});

const Experiment = mongoose.model('Experiment', experimentSchema);

module.exports = Experiment;
