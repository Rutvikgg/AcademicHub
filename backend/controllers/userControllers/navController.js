const catchAsync = require('../../utils/catchAsync');
// const AppError = require('../../utils/appError');

exports.getNav = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    nav: {
      user: req.user,
    },
  });
});
