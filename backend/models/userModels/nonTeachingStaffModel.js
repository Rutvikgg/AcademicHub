const mongoose = require('mongoose');
const User = require('./userModel');

const nonTeachingStaffSchema = new mongoose.Schema(
  {
    nonTeachingStaffId: {
      type: String,
      required: [true, 'Please provide non teaching staff id'],
      unique: true,
    },

    hireDate: {
      type: Date,
      required: [true, 'Please provide hire date for non teaching staff.'],
    },

    designation: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const NonTeachingStaff = User.discriminator(
  'NonTeachingStaff',
  nonTeachingStaffSchema,
);

module.exports = NonTeachingStaff;
