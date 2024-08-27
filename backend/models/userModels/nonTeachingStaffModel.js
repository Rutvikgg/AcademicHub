const mongoose = require('mongoose');

const nonTeachingStaffSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
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

nonTeachingStaffSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

nonTeachingStaffSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const NonTeachingStaff = mongoose.model(
  'NonTeachingStaff',
  nonTeachingStaffSchema,
);

module.exports = NonTeachingStaff;
