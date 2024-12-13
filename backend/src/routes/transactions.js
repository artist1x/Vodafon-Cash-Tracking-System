const express = require('express');
const { auth, authorize } = require('../middleware/auth');
const {
  createTransactionValidator,
  getTransactionsValidator
} = require('../validators/transaction.validator');
const { validateRequest } = require('../utils/validation');
const {
  createTransaction,
  getTransactions,
  getStatistics
} = require('../controllers/transactionController');

const router = express.Router();

router.use(auth);

// Create transaction (Admin only)
router.post(
  '/',
  authorize('Admin'),
  createTransactionValidator,
  validateRequest,
  createTransaction
);

// Get transactions (filtered by role permissions)
router.get(
  '/',
  getTransactionsValidator,
  validateRequest,
  getTransactions
);

// Get statistics (Admin only)
router.get(
  '/statistics',
  authorize('Admin'),
  getStatistics
);

module.exports = router;