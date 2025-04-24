const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes/userRoutes');
const instituteRouter = require('./routes/instituteRoutes/instituteRoutes');
const departmentRouter = require('./routes/instituteRoutes/departmentRoutes');
const groupRouter = require('./routes/instituteRoutes/groupRoutes');
const courseRouter = require('./routes/academicRoutes/courseRoutes');
const labRouter = require('./routes/academicRoutes/labRoutes');
const submissionRouter = require('./routes/academicRoutes/submissionRoutes');
const assignmentRouter = require('./routes/academicRoutes/assignmentRoutes');
const experimentRouter = require('./routes/academicRoutes/experimentRoutes');
const examRouter = require('./routes/academicRoutes/examRoutes');
const examScoreRouter = require('./routes/academicRoutes/examScoreRoutes');
const resourceRouter = require('./routes/academicRoutes/resourceRoutes');
const navRouter = require('./routes/userRoutes/navRoutes');
const dashboardRouter = require('./routes/userRoutes/dashboardRoutes');
const profileRouter = require('./routes/userRoutes/profileRoutes');

const app = express();

// 1. Global Middleware

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// CORS
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with the front-end origin
  credentials: true,
};

app.use(cors(corsOptions));

// Limits request from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent HTTP parameter pollution
app.use(hpp());

// Serving static files (Currently not required, maybe in future)
// app.use(express.static(`${__dirname}/public`));

// 2. Routes
app.use('/api/v1/users', userRouter);
app.use('/api/v1/institute', instituteRouter);
app.use('/api/v1/department', departmentRouter);
app.use('/api/v1/group', groupRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/lab', labRouter);
app.use('/api/v1/submission', submissionRouter);
app.use('/api/v1/assignment', assignmentRouter);
app.use('/api/v1/experiment', experimentRouter);
app.use('/api/v1/exam', examRouter);
app.use('/api/v1/exam-score', examScoreRouter);
app.use('/api/v1/resource', resourceRouter);

app.use('/api/v1/nav', navRouter);
app.use('/api/v1/dashboard', dashboardRouter);
app.use('/api/v1/profile', profileRouter);

// 3. Global error handlers

// Sends error for unhandled or not existing routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
