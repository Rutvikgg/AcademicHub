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

courseSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

courseSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
