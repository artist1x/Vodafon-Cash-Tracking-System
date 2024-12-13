const crypto = require('crypto');

class EncryptionService {
  static algorithm = 'aes-256-gcm';
  static ivLength = 16;
  static saltLength = 64;
  static tagLength = 16;

  static encrypt(text, secretKey) {
    const iv = crypto.randomBytes(this.ivLength);
    const salt = crypto.randomBytes(this.saltLength);
    
    const key = crypto.pbkdf2Sync(secretKey, salt, 100000, 32, 'sha512');
    
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);
    
    const encrypted = Buffer.concat([
      cipher.update(text, 'utf8'),
      cipher.final()
    ]);
    
    const tag = cipher.getAuthTag();

    return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');
  }

  static decrypt(encryptedData, secretKey) {
    const buffer = Buffer.from(encryptedData, 'base64');
    
    const salt = buffer.slice(0, this.saltLength);
    const iv = buffer.slice(this.saltLength, this.saltLength + this.ivLength);
    const tag = buffer.slice(this.saltLength + this.ivLength, this.saltLength + this.ivLength + this.tagLength);
    const encrypted = buffer.slice(this.saltLength + this.ivLength + this.tagLength);
    
    const key = crypto.pbkdf2Sync(secretKey, salt, 100000, 32, 'sha512');
    
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);
    decipher.setAuthTag(tag);
    
    return decipher.update(encrypted) + decipher.final('utf8');
  }
}

module.exports = EncryptionService;