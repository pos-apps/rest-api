const authentication = require('../controllers/authentication');
const verify_token = require('../libs/verify-token');
const express = require('express');
const router = express.Router();

// routing register
router.post('/authentication/register', authentication.register);

// routing login
router.post('/authentication/login', authentication.login);

// routing cek token
router.get('/authentication/cek-auth', verify_token.verifyToken, authentication.cekAuth);

module.exports = router;