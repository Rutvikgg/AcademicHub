const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide your First Name.'],
    },
    lastName: {
      type: String,
      required: [true, 'Please provide your Last Name.'],
    },
    fatherName: {
      type: String,
      required: [true, "Please provide your Father's Name"],
    },
    motherName: {
      type: String,
      required: [true, "Please provide your Mother's Name"],
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
    gender: {
      type: String,
      required: [true, 'Please provide your gender.'],
      enum: ['Male', 'Female', 'Other'],
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Please provide your Date of Birth.'],
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
    userType: {
      type: String,
      enum: [
        'student',
        'teachingStaff',
        'nonTeachingStaff',
        'admin',
        'productAdmin',
      ],
      default: 'student',
    },
    profileImage: String,
    userStatus: {
      type: String,
      enum: ['active', 'inactive', 'frozen'],
      default: 'active',
      select: false,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password.'],
      minlength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password.'],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords are not same.',
      },
    },
    passwordChangedAt: Date,
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

userSchema.pre('save', function (next) {
  if (this.isNew) return next();

  this.updatedAt = new Date();
  next();
});

userSchema.pre('findOneAndUpdate', function (next) {
  this.set({ updatedAt: new Date() });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
