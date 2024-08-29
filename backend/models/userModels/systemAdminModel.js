const mongoose = require('mongoose');
const User = require('./userModel');

const systemAdminSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      required: [true, 'Please provide system admin id'],
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

const SystemAdmin = User.discriminator('SystemAdmin', systemAdminSchema);

module.exports = SystemAdmin;
