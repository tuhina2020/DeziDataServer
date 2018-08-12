// server/models/User.js
const mongoose = require('mongoose');
const config = require('../../server/config.js');
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
  last_login: {
    type: Date,
    default: Date.now
  },
  authentication: {
    mode: {
      type: String,
      enum: ['facebook', 'google', 'phone']
    },
    data: {},
    access_token: {
      type: String
    }
  }
});

UserSchema.methods.gravatar = function (size) {
  const crypto = require('crypto');
  if (!size) size = 200;
  if (!this.email) return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  const md5 = crypto.createHash('md5').update(this.local.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

UserSchema.methods.issueToken = function (done) {
  const user = this;
  if (!user.authentication && !user.authentication.access_token) {
    const accessToken = jwt.encode({ user_id: user._id }, config.get('token.secret'));
    user.access_token = accessToken;
  }
  user.last_login_on = Date.now();
  user.profile_picture = user.profile_picture || user.gravatar();

  user.save((error) => {
    if (error) { return done(error); }
    return done(null, user);
  });
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
