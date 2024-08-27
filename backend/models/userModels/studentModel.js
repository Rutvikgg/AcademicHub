const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    studentId: {
      type: String,
      required: [true, 'Please provide a student id'],
      unique: true,
    },
    enrollmentDate: {
      type: Date,
      required: [true, "Please provide a student's enrollment date."],
    },
    currentYear: {
      type: Number,
      min: 1,
      max: 6,
      default: 1,
    },
    currentSemester: {
      type: Number,
      min: 1,
      max: 12,
      default: 1,
    },
    division: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Group',
    },
    batch: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Group',
    },
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
    courses: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Course',
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

studentSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

studentSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
