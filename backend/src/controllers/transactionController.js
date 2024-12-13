const asyncHandler = require("../utils/asyncHandler");
const TransactionService = require("../services/transaction.service");
const { AppError } = require("../utils/errorHandler");

const createTransaction = asyncHandler(async (req, res) => {
  const transaction = await TransactionService.createTransaction(
    req.body,
    req.user._id
  );
  res.status(201).json(transaction);
});

const getTransactions = asyncHandler(async (req, res) => {
  const result = await TransactionService.getTransactions(req.query, req.user);
  res.json(result);
});

// const getAllRevenue = asyncHandler(async (req, res) => {
//   const result = await 
// })

const getStatistics = asyncHandler(async (req, res) => {
  if (req.user.role !== "Admin") {
    throw new AppError("Access denied", 403);
  }
  const stats = await TransactionService.getStatistics();
  res.json(stats);
});

module.exports = {
  createTransaction,
  getTransactions,
  getStatistics,
};

