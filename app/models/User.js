// server/models/User.js
const mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  profile_picture: String, /* To be changed later */
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
  phone: {
    number: String
  },
  login_details: {
    mode: {
      type: String,
      enum: ['facebook', 'google', 'account_kit']
    },
    auth: {},
    access_token: {
      type: String
    }
  }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
