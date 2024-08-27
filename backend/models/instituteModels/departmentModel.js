const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for departemnt.'],
    },
    departmentCode: {
      type: String,
      required: [true, 'Please provide departemnt code'],
      unique: true,
    },
    departmentType: {
      type: String,
      required: [true, 'Please provide type of deparment/section.'],
      enum: [
        'Academic',
        'Administrative',
        'Student Service',
        'Extracurricular and Co-curricular',
        'Research and Development',
        'Library and Learning Resources',
        'Governance',
      ],
    },
    headOfDepartment: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    institute: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Institute',
    },
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

departmentSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

departmentSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
