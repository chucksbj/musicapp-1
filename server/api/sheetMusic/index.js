'use strict';

var express = require('express');
var controller = require('./sheetMusic.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:instrument', controller.instrument);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;