const crypto = require('crypto');

class SecurityUtils {
  static generateSecureToken(length = 32) {
    return crypto.randomBytes(length).toString('hex');
  }

  static sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    return input.replace(/[<>]/g, '');
  }

  static maskSensitiveData(data) {
    if (typeof data !== 'string') return data;
    return data.replace(/\d(?=\d{4})/g, '*');
  }
}

module.exports = SecurityUtils;