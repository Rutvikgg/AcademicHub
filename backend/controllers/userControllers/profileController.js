const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const User = require('../../models/userModels/userModel');

exports.getProfile = catchAsync(async (req, res, next) => {
  let query = User.findById(req.user._id);
  query = query.populate({ path: 'department', select: 'name' });
  query = query.populate({ path: 'institute', select: 'name' });
  query = query.populate({ path: 'division', select: 'name' });
  query = query.populate({ path: 'batch', select: 'name' });
  const user = await query;

  if (!user) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    profile: {
      user,
    },
  });
});
