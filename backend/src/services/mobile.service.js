const Transaction = require('../models/Transaction');
const { AppError } = require('../utils/errorHandler');
const { validateMobileNumber } = require('../utils/validation');

class MobileTransactionService {
  static async createMobileTransaction(data) {
    const { sender,senderName, amount, type, userId } = data;

    // Validate mobile numbers
    if (!validateMobileNumber(sender)) {
      throw new AppError('Invalid mobile number format', 400);
    }

    // Create transaction with mobile-specific data
    const transaction = new Transaction({
      sender,
      senderName,
      amount,
      type,
      createdBy: userId,
      status: "completed",
      timestamp: new Date().toISOString(),
    });

    const savedTransaction = await transaction.save();
    return this.processMobileTransaction(savedTransaction);
  }

  static async processMobileTransaction(transaction) {
    try {
      // Add mobile-specific transaction processing logic here
      // For example: integrate with mobile money API, validate device, etc.
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      transaction.status = 'completed';
      return await transaction.save();
    } catch (error) {
      transaction.status = 'failed';
      await transaction.save();
      throw new AppError('Mobile transaction processing failed', 400);
    }
  }
}

module.exports = MobileTransactionService;