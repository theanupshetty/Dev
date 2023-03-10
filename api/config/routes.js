var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');
router.post('/users', userController.createUser);

module.exports = router;