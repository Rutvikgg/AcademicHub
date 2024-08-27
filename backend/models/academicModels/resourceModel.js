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

resourceSchema.pre('save', function (next) {
  if (this.isnew) return next();

  this.updatedAt = Date.now();
  next();
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
