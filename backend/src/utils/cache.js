class CacheService {
  constructor() {
    this.cache = new Map();
    this.ttls = new Map();
  }

  set(key, value, ttlSeconds = 300) {
    this.cache.set(key, value);
    const expiryTime = Date.now() + (ttlSeconds * 1000);
    this.ttls.set(key, expiryTime);
    
    // Schedule cleanup
    setTimeout(() => {
      this.delete(key);
    }, ttlSeconds * 1000);
  }

  get(key) {
    if (!this.has(key)) return null;
    return this.cache.get(key);
  }

  has(key) {
    if (!this.cache.has(key)) return false;
    
    const expiryTime = this.ttls.get(key);
    if (Date.now() > expiryTime) {
      this.delete(key);
      return false;
    }
    
    return true;
  }

  delete(key) {
    this.cache.delete(key);
    this.ttls.delete(key);
  }

  clear() {
    this.cache.clear();
    this.ttls.clear();
  }
}

module.exports = new CacheService();