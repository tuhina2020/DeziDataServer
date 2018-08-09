//server/routes/product.js

const Designer = require('./../controllers/designer.ctrl.js')
const express = require('express');
const router = express.Router();

// Home page route.
router.get('/designers', Designer.getAll);

// About page route.
router.get('/designer/:id', Designer.get);

router.post('/designer/create', Designer.create);
router.delete('/:id', Designer.delete);
router.put('/:id', Designer.update);

module.exports = router;