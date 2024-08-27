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

teachingStaffSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

teachingStaffSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const TeachingStaff = mongoose.model('TeachingStaff', teachingStaffSchema);

module.exports = TeachingStaff;
