const TRANSACTION_TYPES = {
  DEPOSIT: "deposit",
  WITHDRAWAL: "withdrawal",
  TRANSFER: "transfer",
};

const TRANSACTION_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  FAILED: "failed",
};

const USER_ROLES = {
  ADMIN: "Admin",
  Employee: "Employee",
};

const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};

module.exports = {
  TRANSACTION_TYPES,
  TRANSACTION_STATUS,
  USER_ROLES,
  PAGINATION,
};
