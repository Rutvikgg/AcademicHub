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
    division: {},
    batch: {},
    institute: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Institute',
    },
    department: {},
    otherDepartments: {},
    courses: {},
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

studentSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = Date.now();
  next();
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
