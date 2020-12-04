const express = require('express');
const user = require('./user');
const product = require('./product');

const router = express.Router();
user(router);
product(router);

module.exports = router;
