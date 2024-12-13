const { body, query } = require('express-validator');
const { TRANSACTION_TYPES } = require('../config/constants');
const { isValidDateString } = require('../utils/dateUtils');

const createTransactionValidator = [
  body('sender')
    .trim()
    .notEmpty()
    .withMessage('Sender is required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Sender name must be between 3 and 50 characters'),
  

  
  body('amount')
    .isNumeric()
    .withMessage('Amount must be a number')
    .custom(value => value > 0)
    .withMessage('Amount must be greater than 0'),
  
  body('type')
    .isIn(Object.values(TRANSACTION_TYPES))
    .withMessage('Invalid transaction type')
];

const getTransactionsValidator = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be between 1 and 100'),
  
  query('startDate')
    .optional()
    .custom(isValidDateString)
    .withMessage('Invalid start date format'),
  
  query('endDate')
    .optional()
    .custom(isValidDateString)
    .withMessage('Invalid end date format'),
  
  query('minAmount')
    .optional()
    .isNumeric()
    .withMessage('Minimum amount must be a number'),
  
  query('maxAmount')
    .optional()
    .isNumeric()
    .withMessage('Maximum amount must be a number')
];

module.exports = {
  createTransactionValidator,
  getTransactionsValidator
};