const authentication = require('../controllers/authentication');
const express = require('express');
const router = express.Router();

// routing register
router.post('/authentication/register', authentication.register);

// routing login
router.post('/authentication/login', authentication.login);

module.exports = router;