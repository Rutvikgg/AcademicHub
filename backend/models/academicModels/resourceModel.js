const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide the name of the resource'],
    },
    description: String,
    resourceURL: String,
    resourceFile: String,
    subjectType: {
      type: String,
      enum: ['Course', 'Lab'],
    },
    subject: {
      type: mongoose.SchemaTypes.ObjectId,
      refPath: 'subjectType',
    },
    uploadedBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
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

resourceSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

resourceSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
