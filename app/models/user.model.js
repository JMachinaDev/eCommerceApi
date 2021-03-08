const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// creat model, give name, and schema to use
module.exports = mongoose.model('User', userSchema);
