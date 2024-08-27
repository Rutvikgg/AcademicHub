const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name for the course.'],
    },
    courseCode: {
      type: String,
      required: [true, 'Please provide course code.'],
      unique: true,
    },
    semester: {
      type: Number,
      required: [true, 'Please provide semester of the course.'],
      min: 1,
      max: 12,
    },
    credits: {
      type: Number,
      required: [true, 'Please provide credits alloted to course.'],
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Department',
    },
    teachersIncharge: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'TeachingStaff',
      },
    ],
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

courseSchema.pre('save', function (next) {
  if (this.isnew) return next();

  this.updatedAt = Date.now();
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
