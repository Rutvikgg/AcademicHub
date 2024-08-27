const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    adminId: {
      type: String,
      required: [true, 'Please provide admin id'],
      unique: true,
    },
    hireDate: {
      type: Date,
      required: [true, 'Please provide hire date for admin.'],
    },
    designation: String,
    institute: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Institute',
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Department',
    },
    otherDepartments: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Department',
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

adminSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

adminSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
