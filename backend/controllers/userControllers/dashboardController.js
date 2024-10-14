const catchAsync = require('../../utils/catchAsync');
// const AppError = require('../../utils/appError');

exports.getDashboard = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      user: req.user,
    },
  });
});
