const express = require('express');
const { login } = require('../controllers/authController');
const { loginValidator } = require('../validators/auth.validator');
const { validateRequest } = require('../utils/validation');

const router = express.Router();

router.post('/login', loginValidator, validateRequest, login);

module.exports = router;