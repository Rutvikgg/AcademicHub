const mongoose = require('mongoose');
const User = require('./userModel');

const teachingStaffSchema = new mongoose.Schema(
  {
    teachingStaffId: {
      type: String,
      required: [true, 'Please provide teaching staff id'],
      unique: true,
    },

    hireDate: {
      type: Date,
      required: [true, 'Please provide hire date for staff.'],
    },

    designation: String,

    coursesIncharge: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course',
      },
    ],

    labsIncharge: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Lab',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const TeachingStaff = User.discriminator('TeachingStaff', teachingStaffSchema);

module.exports = TeachingStaff;
