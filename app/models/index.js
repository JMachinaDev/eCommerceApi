const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.role = require('./role.model');
db.user = require('./user.model');

db.ROLES = ['user', 'admin', 'moderator'];

module.exports = db;
