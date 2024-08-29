const mongoose = require('mongoose');

const labSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Provide a name for the lab.'],
    },
    labCode: {
      type: String,
      required: [true, 'Please provide code for lab'],
      unique: true,
    },
    credits: {
      type: Number,
      required: [true, 'Please provide credits alloted to course.'],
    },
    course: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Course',
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Department',
    },
    teachersIncharge: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
      },
    ],
    labAssistants: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
      },
    ],
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

labSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

labSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Lab = mongoose.model('Lab', labSchema);

module.exports = Lab;
