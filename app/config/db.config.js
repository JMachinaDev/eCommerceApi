require('dotenv').config();

module.exports = {
  url: process.env.MONGO_URI,
  DB: 'user_db'
}
