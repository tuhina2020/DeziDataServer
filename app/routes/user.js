const User = require('./../controllers/User.ctrl.js')
const express = require('express');
const router = express.Router();

router.get('/:id', User.get)
router.delete('/:id', User.delete)
router.put('/:id', User.update);
router.post('/create', User.create);

module.exports = router;