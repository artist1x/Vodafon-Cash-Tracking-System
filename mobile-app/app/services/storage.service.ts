import { SecureStorage } from '@nativescript/secure-storage';

export class StorageService {
  private static instance: StorageService;
  private secureStorage: SecureStorage;

  private constructor() {
    this.secureStorage = new SecureStorage();
  }

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      await this.secureStorage.setSync({
        key,
        value
      });
    } catch (error) {
      console.error('Error storing data:', error);
      throw error;
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      return await this.secureStorage.getSync({
        key
      });
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await this.secureStorage.removeSync({
        key
      });
    } catch (error) {
      console.error('Error removing data:', error);
      throw error;
    }
  }
}