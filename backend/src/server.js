require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const { logger, customLogger } = require("./utils/logger");
const { handleError } = require("./utils/errorHandler");
const { connectDB } = require("./config/database");
const rateLimiter = require("./middleware/rateLimiter");
const APP_CONFIG = require("./config/app.config");

const User = require("./models/User");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const transactionRoutes = require("./routes/transactions");
const mobileRoutes = require("./routes/mobile");
const HashService = require("./services/hash.service");
const TransactionService = require("./services/transaction.service");

const app = express();

app.use(cors({ origin: "*", methods: ["POST", "GET", "DELETE", "PUT"] }));
app.use(logger);
// Start of Selection
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/mobile", mobileRoutes);

app.use(handleError);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date() });
});

async function createAdmin() {
  try {
    const existingUser = await User.findOne({ username: "artist" });

    if (!existingUser) {
      const hashedPassword = await HashService.hash("21122000", 10);

      const newAdmin = new User({
        username: "artist",
        password: hashedPassword,
        role: "Admin",
      });

      const savedAdmin = await newAdmin.save();
    } else {
      console.log("Admin user already exists!");
    }
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
}

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to DB");
    await testConnection();
    const PORT = APP_CONFIG.port;
    app.listen(PORT, () => {
      customLogger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    customLogger.error("Failed to start server:", error);
    process.exit(1);
  }
};
const testConnection = async () => {
  try {
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
  } catch (error) {
    console.error("Error testing MongoDB connection:", error);
  }
};

if (require.main === module) {
  startServer();
}

module.exports = app;
