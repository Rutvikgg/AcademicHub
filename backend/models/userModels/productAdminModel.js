const mongoose = require('mongoose');
const User = require('./userModel');

const productAdminSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      required: [true, 'Please provide product admin id'],
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const ProductAdmin = User.discriminator('ProductAdmin', productAdminSchema);

module.exports = ProductAdmin;
