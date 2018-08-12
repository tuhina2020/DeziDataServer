const User = require('./../controllers/User.ctrl.js')
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { 
       successRedirect : '/', 
       failureRedirect: '/login' 
  }),
  function(req, res) {
  	console.log('redirecting to / on succesful login')
    res.redirect('/');
  });
router.get('/:id', User.get)
router.delete('/:id', User.delete)
router.put('/:id', User.update);
router.post('/create', User.create);

module.exports = router;