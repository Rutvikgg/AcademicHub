const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for your group.'],
    },
    groupType: {
      type: String,
      required: [true, 'Please provide the type of group.'],
      enum: [
        'Year',
        'Division',
        'Batch',
        'Project',
        'Tutorial',
        'Elective',
        'Mentor',
        'Other',
      ],
    },
    members: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
      },
    ],
    groupIncharge: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
    },
    institute: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Institute',
    },
    department: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Department',
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

groupSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

groupSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});
const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
