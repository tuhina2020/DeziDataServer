var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../../models/User');
var config = require('../../../server/config');

passport.use(new FacebookStrategy({
  clientID: config.get('authentication.facebook.clientID'),
  clientSecret: config.get('authentication.facebook.clientSecret'),
  callbackURL: config.get('authentication.facebook.callbackURL'),
  profileFields: ['emails', 'displayName', 'picture.type(large)'],
  passReqToCallback: true, // Allows us to pass in the request from our route (lets us check if a user is logged in or not)
},
function (request, token, refreshToken, profile, done) {
	console.log('we are in process tick 1', refreshToken, token)
  // Asynchronous
  process.nextTick(function() {
    // If user is not logged in
    console.log('we are in process tick', refreshToken, token)
    if (!request.user) {
      User.findOne({'authentication.data.id': profile.id}, function (error, user) {
        if (error) { return done(error); }

        if (user) {
          // if there is a user id already but no token (user was linked at one point and then removed)
          if (!user.authentication.data.token) {
            user.authentication.data.token = token;
            if (profile.emails) {
              user.email = (profile.emails[0].value).toLowerCase();
            } else {
              user.email = '';
            }
            user.profile_picture = profile.photos ? profile.photos[0].value : '';
            user.last_login = Date.now();
            user.save(function(error) {
              if (error) { return done(error); }
              return done(null, user);
            });
          }
          return done(null, user); // user found, return that user
        } else {
          // if there is no user, create that user
          var newUser = new User();

          newUser.authentication.data.id = profile.id;
          newUser.authentication.data.token = token;
          if (profile.emails) {
            newUser.facebook.email = (profile.emails[0].value).toLowerCase();
            newUser.noemail = false;
          } else {
            newUser.facebook.email = '';
            newUser.noemail = true;
          }
          newUser.profile_picture = profile.photos ? profile.photos[0].value : '';
          newUser.last_login = Date.now();
          newUser.issueToken(function(error) {
            if (error) { return done(error); }
            return done(null, newUser);
          });
        }
      });
    } else {
      // user already exists and is logged in, we have to link accounts
      var connectUser = request.user;
      connectUser.authentication.data.id = profile.id;
      connectUser.authentication.mode = 'facebook';
      connectUser.authentication.data.token = token;
      if (profile.emails) {
        connectUser.email = (profile.emails[0].value).toLowerCase();
        connectUser.noemail = false;
      } else {
        connectUser.email = '';
      }
      connectUser.profile_picture = profile.photos ? profile.photos[0].value : '';
      connectUser.save(function (error) {
        if (error) { return done(error); }
        return done(null, connectUser);
      });
    }
  });
}));

var authenticate =  function(request, response, next) {
  console.log('we are just starting : ', config.get('authentication.facebook'))
  
};

exports.authenticate = authenticate;