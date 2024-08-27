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
    department: {},
    otherDepartments: {},
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

nonTeachingStaffSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = Date.now();
  next();
});

const NonTeachingStaff = mongoose.model(
  'NonTeachingStaff',
  nonTeachingStaffSchema,
);

module.exports = NonTeachingStaff;
