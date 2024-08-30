const mongoose = require('mongoose');
const User = require('./userModel');

const adminSchema = new mongoose.Schema(
  {
    instituteAllottedId: {
      type: String,
      required: [true, 'Please provide admin id'],
      unique: true,
    },

    hireDate: {
      type: Date,
      required: [true, 'Please provide hire date for admin.'],
    },

    designation: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Admin = User.discriminator('Admin', adminSchema);

module.exports = Admin;
