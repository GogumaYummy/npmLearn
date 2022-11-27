const mongoose = require('mongoose');

const connect = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/spa_mall')
    .catch((err) => console.error(err));
};

mongoose.connection.on('error', (err) =>
  console.error('MongoDB connection Error: ', err)
);

module.exports = connect;
