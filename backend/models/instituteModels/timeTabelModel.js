const mongoose = require('mongoose');

const timeTableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the name for time table'],
    },
    division: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Group',
    },
    dayOfWeek: {
      type: String,
      required: [true, 'Please provide day of the week.'],
      enum: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
    },
    schedule: [
      {
        subject: String,
        teacher: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: 'TeachingStaff',
        },
        startTime: String,
        endTime: String,
        room: Number,
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

timeTableSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

timeTableSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const TimeTable = mongoose.model('TimeTable', timeTableSchema);

module.exports = TimeTable;
