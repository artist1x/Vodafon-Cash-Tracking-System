const jwt = require("jsonwebtoken");
const { AppError } = require("../utils/errorHandler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

class AuthService {
  static async login(username, password) {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        throw new AppError("User not found", 404);
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new AppError("Invalid credentials", 401);
      }
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      return {
        token,
        user: {
          id: user._id,
          username: user.username,
          role: user.role,
        },
      };
    } catch (error) {
      console.error("Login Error:", error);
      throw new AppError("An error occurred while logging in", 500);
    }
  }

  static async register(username, password, role) {
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new AppError("User already exists", 400);
      }

      const user = new User({
        username,
        password,
        role,
      });

      await user.save();

      return {
        id: user._id,
        username: user.username,
        role: user.role,
      };
    } catch (error) {
      console.error("Register Error:", error);
      throw new AppError("An error occurred while registering", 500);
    }
  }
}

module.exports = AuthService;
