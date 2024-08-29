const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    subjectType: {
      type: String,
      required: [true, 'Please provide type of examination'],
      enum: ['Course', 'Lab'],
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      refPath: 'subjectType',
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Present', 'Absent', 'Late', 'Excused'],
      default: 'Absent',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
