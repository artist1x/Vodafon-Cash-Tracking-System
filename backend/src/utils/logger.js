const morgan = require('morgan');

const logFormat = ':method :url :status :response-time ms - :res[content-length]';

const logger = morgan(logFormat, {
  skip: (req, res) => process.env.NODE_ENV === 'test'
});

const customLogger = {
  info: (message, meta = {}) => {
    console.log(JSON.stringify({ level: 'info', message, ...meta, timestamp: new Date() }));
  },
  error: (message, error = {}, meta = {}) => {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: {
        message: error.message,
        stack: error.stack
      },
      ...meta,
      timestamp: new Date()
    }));
  }
};

module.exports = { logger, customLogger };