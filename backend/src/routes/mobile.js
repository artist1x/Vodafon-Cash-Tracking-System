const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const { validateRequest } = require('../utils/validation');
const { mobileTransactionValidator } = require('../validators/mobile.validator');
const { createMobileTransaction } = require('../controllers/mobileController');

const router = express.Router();

router.use(auth);

// Mobile transaction endpoint
router.post(
  '/transactions',
  authorize('Admin'),
  mobileTransactionValidator,
  validateRequest,
  createMobileTransaction
);

module.exports = router;