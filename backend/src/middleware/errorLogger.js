const { customLogger } = require('../utils/logger');

const errorLogger = (err, req, res, next) => {
  customLogger.error('Error occurred', {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
    params: req.params,
    user: req.user ? { id: req.user._id, role: req.user.role } : null
  });
  
  next(err);
};

module.exports = errorLogger;