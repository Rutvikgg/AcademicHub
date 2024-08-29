const mongoose = require('mongoose');
const User = require('./userModel');

const studentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: [true, 'Please provide a student id'],
      unique: true,
    },

    enrollmentDate: {
      type: Date,
      required: [true, "Please provide a student's enrollment date."],
    },

    currentYear: {
      type: Number,
      min: 1,
      max: 6,
      default: 1,
    },

    currentSemester: {
      type: Number,
      min: 1,
      max: 12,
      default: 1,
    },

    division: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Group',
    },

    batch: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Group',
    },

    courses: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Student = User.discriminator('Student', studentSchema);

module.exports = Student;
