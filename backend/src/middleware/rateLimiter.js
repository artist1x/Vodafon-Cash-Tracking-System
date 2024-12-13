const rateLimit = require('express-rate-limit');
const APP_CONFIG = require('../config/app.config');

const rateLimiter = rateLimit({
  windowMs: APP_CONFIG.rateLimiting.windowMs,
  max: APP_CONFIG.rateLimiting.max,
  message: {
    status: 'error',
    message: 'Too many requests, please try again later.'
  }
});

module.exports = rateLimiter;