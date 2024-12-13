const Transaction = require("../models/Transaction");
const { AppError } = require("../utils/errorHandler");
const { PAGINATION } = require("../config/constants");
const { buildTransactionFilter } = require("../utils/queryBuilder");

class TransactionService {
  static async getTransactions(query, user) {
    const page = parseInt(query.page) || PAGINATION.DEFAULT_PAGE;
    const limit = parseInt(query.limit) || PAGINATION.DEFAULT_LIMIT;

    let filter = {};

    if (user.role === "Employee") {
      filter = { createdBy: user._id };
    } else {
      filter = buildTransactionFilter(query, user);
    }

    if (query.dateFrom && query.dateTo) {
      filter.createdAt = {
        $gte: new Date(query.dateFrom), // أكبر من أو يساوي التاريخ الأول
        $lte: new Date(query.dateTo), // أصغر من أو يساوي التاريخ الثاني
      };
    }

    console.log("Filter used for query:", filter);

    const [transactions, total] = await Promise.all([
      Transaction.find(filter)
        .populate("createdBy", "username")
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 }),
      Transaction.countDocuments(filter),
    ]);

    console.log("Transactions found:", transactions);

    return {
      data: transactions,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total,
    };
  }

  static async getStatistics(query) {
    // تحديد الفلتر بناءً على التواريخ إذا تم تمريرها
    let filter = {};

    if (query.dateFrom && query.dateTo) {
      filter.createdAt = {
        $gte: new Date(query.dateFrom), // أكبر من أو يساوي التاريخ الأول
        $lte: new Date(query.dateTo), // أصغر من أو يساوي التاريخ الثاني
      };
    }

    try {
      // استعلام الإحصائيات مع الفلتر إذا كان موجود
      const stats = await Transaction.aggregate([
        {
          $match: filter, // تطبيق الفلتر (التاريخ أو لا)
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$amount" },
            totalTransactions: { $sum: 1 },
            avgAmount: { $avg: "$amount" },
            successRate: {
              $avg: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
            },
          },
        },
        {
          $project: {
            _id: 0,
            totalAmount: 1,
            totalTransactions: 1,
            avgAmount: 1,
            successRate: { $multiply: ["$successRate", 100] },
          },
        },
      ]);

      return (
        stats[0] || {
          totalAmount: 0,
          totalTransactions: 0,
          avgAmount: 0,
          successRate: 0,
        }
      );
    } catch (error) {
      console.error("Error fetching statistics:", error);
      throw new AppError("Unable to fetch statistics", 500);
    }
  }
}

module.exports = TransactionService;
