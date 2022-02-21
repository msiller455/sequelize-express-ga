var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users');

router.get('/', usersController.index);
router.post('/', usersController.create);
router.get('/:id', usersController.show);

module.exports = router;
