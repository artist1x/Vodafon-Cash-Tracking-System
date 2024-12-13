const User = require('../models/User');
const { AppError } = require('../utils/errorHandler');

class UserService {
  static async createUser(userData) {
    const existingUser = await User.findOne({ username: userData.username });
    if (existingUser) {
      throw new AppError('Username already exists', 400);
    }
    
    const user = new User(userData);
    await user.save();
    
    return {
      id: user._id,
      username: user.username,
      role: user.role
    };
  }

  static async getUsers() {
    return User.find({}, '-password');
  }

  static async updateUser(userId, updates) {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError('User not found', 404);
    }

    if (updates.username && updates.username !== user.username) {
      const existingUser = await User.findOne({ username: updates.username });
      if (existingUser) {
        throw new AppError('Username already exists', 400);
      }
    }

    Object.keys(updates).forEach(update => user[update] = updates[update]);
    await user.save();

    return {
      id: user._id,
      username: user.username,
      role: user.role
    };
  }

  static async deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    return { message: 'User deleted successfully' };
  }
}

module.exports = UserService;