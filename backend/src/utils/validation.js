const { validationResult } = require('express-validator');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(`this Validator have an issue ${errors}`);
    
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateMobileNumber = (number) => {
  // Basic mobile number validation (E.164 format)
  const mobileRegex = /^\+?[1-9]\d{1,14}$/;
  return mobileRegex.test(number);
};

module.exports = { validateRequest, validateMobileNumber };