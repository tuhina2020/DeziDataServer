const Designer = require('./../controllers/designer.ctrl.js')
const express = require('express');
const router = express.Router();

router.get('/:id', /*validator.params(validation.get)*/Designer.get)
router.delete('/:id', /*validator.params(validation.get),*/ Designer.delete)
router.put('/:id', /*validator.body(validation.create),*/ Designer.update);

router.post('/create', /*validator.body(validation.create),*/ Designer.create);

module.exports = router;