import { Transaction } from "../types/transaction";
import { User } from "../types/auth";
import { addDays, subDays, addHours } from "date-fns";

// Generate realistic transaction amounts
function generateAmount(): number {
  const base = Math.floor(Math.random() * 1000) * 10; // Base amount 0-10000
  const cents = Math.floor(Math.random() * 100); // Random cents
  return base + cents;
}

// Generate timestamps within a date range
function generateTimestamp(startDate: Date, endDate: Date): string {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const timestamp = start + Math.random() * (end - start);
  return new Date(timestamp).toISOString();
}

// Generate mock users
export const mockUsers: User[] = [
  { id: "1", username: "admin", email: "admin@vodafone.com", role: "admin" },
  {
    id: "2",
    username: "john.doe",
    email: "john.doe@vodafone.com",
    role: "Employee",
  },
  {
    id: "3",
    username: "jane.smith",
    email: "jane.smith@vodafone.com",
    role: "Employee",
  },
  {
    id: "4",
    username: "manager",
    email: "manager@vodafone.com",
    role: "admin",
  },
];

// Generate mock transactions
const endDate = new Date();
const startDate = subDays(endDate, 60); // Last 60 days of data

export const mockTransactions: Transaction[] = Array.from(
  { length: 200 },
  (_, index) => {
    const sender = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    // const recipient = mockUsers[Math.floor(Math.random() * mockUsers.length)];
    const amount = generateAmount();
    const createdAt = generateTimestamp(startDate, endDate);

    return {
      id: `TR${String(index + 1).padStart(6, "0")}`,
      amount,
      sender: sender.username,
      // recipient: recipient.username,
      status: ["pending", "completed", "completed", "completed", "failed"][
        Math.floor(Math.random() * 5)
      ] as Transaction["status"],
      createdAt,
      updatedAt: addHours(new Date(createdAt), Math.random() * 2).toISOString(),
    };
  }
);
