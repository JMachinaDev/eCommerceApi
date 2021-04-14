require('dotenv').config();

module.exports = {
  url: process.env.MONGO_URI,
  collection: 'user_db'
}
