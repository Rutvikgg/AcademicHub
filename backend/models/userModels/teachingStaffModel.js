const mongoose = require('mongoose');

const teachingStaffSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
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
    institute: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Institute',
    },
    department: {},
    otherDepartments: {},
    subjectsIncharge: {},
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

teachingStaffSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = Date.now();
  next();
});

const TeachingStaff = mongoose.model('TeachingStaff', teachingStaffSchema);

module.exports = TeachingStaff;
