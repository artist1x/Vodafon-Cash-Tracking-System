const { body } = require('express-validator');
const { TRANSACTION_TYPES } = require('../config/constants');

const mobileTransactionValidator = [
  body("sender")
    .trim()
    .notEmpty()
    .withMessage("Sender mobile number is required")
    .matches(/^(?:\+20)?(10|11|12|15)\d{8}$/)
    .withMessage("Invalid mobile number format"),

  

  body("amount")
    .isNumeric()
    .withMessage("Amount must be a number")
    .custom((value) => value > 0)
    .withMessage("Amount must be greater than 0"),

  body("type")
    .isIn(Object.values(TRANSACTION_TYPES))
    .withMessage("Invalid transaction type"),

  // body('deviceId')
  //   .notEmpty()
  //   .withMessage('Device ID is required'),

  // body('location')
  //   .optional()
  //   .isObject()
  //   .withMessage('Location must be an object')
  //   .custom(location => {
  //     if (location && (!location.latitude || !location.longitude)) {
  //       throw new Error('Location must include latitude and longitude');
  //     }
  //     return true;
  //   })
];

module.exports = { mobileTransactionValidator };

// const sender = "+201007167848";
// const isValid = /^(?:\+20)?(10|11|12|15)\d{8}$/.test(sender);
// console.log(isValid); // Should print `true`.
