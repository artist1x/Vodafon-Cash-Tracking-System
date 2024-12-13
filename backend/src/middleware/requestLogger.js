const { customLogger } = require('../utils/logger');

const requestLogger = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    
    customLogger.info('Request completed', {
      method: req.method,
      path: req.path,
      status: res.statusCode,
      duration: `${duration}ms`,
      user: req.user ? { id: req.user._id, role: req.user.role } : null
    });
  });
  
  next();
};

module.exports = requestLogger;