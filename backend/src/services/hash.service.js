const bcrypt = require("bcryptjs");

class HashService {
  static async hash(password) {
    const hashed = await bcrypt.hash(password, 10);
    return hashed;
  }

  static async verify(original, password) {
    return await bcrypt.compare(password, original);
  }
}

module.exports = HashService;
