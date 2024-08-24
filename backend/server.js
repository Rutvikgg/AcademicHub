const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Catches ERROR/EXCEPTION on Synchronous code, gracefully shuts down server
process.on('uncaughtException', err => {
  console.log('Unhandled Exception!!! Shuting down.....');
  console.log(err);
  process.exit(1);
});

dotenv.config({ path: `${__dirname}/../config.env` });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection success'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

// Catches ERROR/EXCEPTION on Asynchronous code, gracefully shuts down server
process.on('unhandledRejection', err => {
  console.log('Unhandled Rejection!!! Shuting down.....');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
