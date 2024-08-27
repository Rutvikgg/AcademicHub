const mongoose = require('mongoose');
const validator = require('validator');

const instituteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for institute'],
  },
  instituteCode: {
    type: String,
    required: [true, 'Please provide institute code'],
    unique: true,
  },
  address: {
    type: String,
    required: [true, 'Please provide your address.'],
  },
  addressCity: {
    type: String,
    required: [true, 'Please provide your City'],
  },
  addressState: {
    type: String,
    required: [true, 'Please provide your State'],
  },
  addressCountry: {
    type: String,
    required: [true, 'Please provide your Country'],
  },
  addressPinCode: {
    type: Number,
    required: [true, 'Please provide your pin-code.'],
    validate: {
      validator: function (el) {
        return el.toString().length === 6;
      },
      message: 'Please provide a valid 6-digit pin-code/zip-code.',
    },
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: true,
    lower: true,
    validate: [validator.isEmail, 'Please provide a valid email.'],
  },
  mobileNumber: {
    type: Number,
    required: [true, 'Please provide your mobile number.'],
    validate: {
      validator: function (el) {
        return el.toString().length === 10;
      },
      message: 'Please provide a valid 10-digit mobile number.',
    },
  },
  websiteURL: {
    type: String,
    required: [true, 'Please provide a website url for institute'],
  },
  establishmentDate: {
    type: Date,
    required: [true, 'Please provide establishment date for institute'],
  },
  accreditationDetails: [String],
  instituteType: {
    type: String,
    required: [true, 'Please provide institute type'],
    enum: ['Central', 'State', 'Private', 'Autonomous', 'Deemed-to-be'],
  },
  universityAffiliation: String,
  principal: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  logo: String,
  missionStatement: String,
  visionStatement: String,
  campusArea: Number,
  facilities: [String],
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
});

instituteSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

instituteSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const Institute = mongoose.model('Institute', instituteSchema);

module.exports = Institute;
