const jwt = require('jwt-simple');
const secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');

module.exports = {
  verifyToken: function (accessToken, next) {
    jwt.verify(accessToken, secret, (error, isMatch) => {
      if (error) { return next(utils.debugTrace(error)); }
      return next(null, isMatch);
    });
  }
}