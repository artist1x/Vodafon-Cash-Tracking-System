const asyncHandler = require('../utils/asyncHandler');
const MobileTransactionService = require('../services/mobile.service');

const createMobileTransaction = asyncHandler(async (req, res) => {
  const transaction = await MobileTransactionService.createMobileTransaction({
    ...req.body,
    userId: req.user._id
  });
  res.status(201).json(transaction);
});

module.exports = { createMobileTransaction };