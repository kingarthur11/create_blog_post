const express = require('express');
const user = require('./user');
const blog = require('./blog');

const router = express.Router();

user(router);
blog(router);

module.exports = router;
