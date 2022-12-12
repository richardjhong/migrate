const mongoose = require('mongoose');
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://curriculum-admin:Mtmddnjs%400712@cluster0.umgm8xe.mongodb.net/migrate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
