const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.role = require('./role.model');
db.user = require('./user.model');

db.ROLES = ['user', 'admin', 'moderator'];

db.connect = () => mongoose.connect(dbConfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: dbConfig.collection
});

module.exports = db;
