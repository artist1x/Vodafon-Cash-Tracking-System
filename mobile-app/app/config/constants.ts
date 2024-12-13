//constants.ts
const port = 3000; 
export const API_URL = `http://192.168.1.5:${port}/api`;


export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
  },
  USERS: {
    BASE: "/users",
    GET_ALL: "/users",
    CREATE: "/users",
    UPDATE: (id: string) => `/users/${id}`,
    DELETE: (id: string) => `/users/${id}`,
  },
  TRANSACTIONS: {
    BASE: "/transactions",
    GET_ALL: "/transactions",
    CREATE: "/transactions",
    GET_SINGLE: (id: string) => `/transactions/${id}`,
    MOBILE: "/mobile/transactions",
  },
  HEALTH: "/health",
};

export const TRANSACTION_TYPES = {
  TRANSFER: 'Transfer',
  BILL_PAYMENT: 'Bill Payment',
  MOBILE_RECHARGE: 'Mobile Recharge',
  WITHDRAWAL: 'Withdrawal',
  DEPOSIT: 'Deposit'
};

export const DATE_RANGES = {
  TODAY: 'today',
  THIS_WEEK: 'this_week',
  THIS_MONTH: 'this_month',
  CUSTOM: 'custom'
};