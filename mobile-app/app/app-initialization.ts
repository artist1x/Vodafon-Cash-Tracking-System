// app-initialization.ts
import { Frame } from "@nativescript/core";
import { AuthService } from "./services/auth.service";
import { ApiService } from "./services/api.service";
import { StorageService } from "./services/storage.service";
import { SMSService } from "./services/sms.service";
import { NavigationService } from "./services/navigation.service";
import { request } from "./utils/http";
import { ENDPOINTS } from "./config/constants";
import { requestSMSPermissions } from "./utils/permissions";

export class AppInitialization {
  private static authService = AuthService.getInstance();
  private static apiService = ApiService.getInstance();
  private static storageService = StorageService.getInstance();
  private static navigationService = NavigationService.getInstance();
  private static smsService = SMSService.getInstance();

  static async initialize(frame: Frame) {
    try {
      // تهيئة خدمة التنقل
      this.navigationService.setNavigation(frame);

      // تهيئة الأذونات وخدمة SMS للأندرويد
      if (global.isAndroid) {
        const hasPermissions = await requestSMSPermissions();
        if (hasPermissions) {
          this.smsService; // سيتم تهيئة المراقب تلقائياً
        }
      }

      // التحقق من حالة المصادقة
      const token = await this.storageService.getItem("auth_token");
      const authState = await this.authService.getAuthState().toPromise();

      if (token && authState.isAuthenticated) {
        try {
          // التحقق من صلاحية التوكن
          await request(ENDPOINTS.HEALTH, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // نجاح التحقق، الانتقال إلى لوحة التحكم
          this.navigationService.navigate("dashboard");
        } catch (error) {
          // فشل التحقق من التوكن
          await this.handleInvalidToken();
        }
      } else {
        // لا يوجد توكن أو المستخدم غير مسجل
        this.navigationService.navigate("login");
      }
    } catch (error) {
      console.error("App initialization error:", error);
      this.navigationService.navigate("login");
    }
  }

  private static async handleInvalidToken() {
    await this.storageService.removeItem("auth_token");
    await this.storageService.removeItem("auth_user");
    await this.authService.logout();
    this.navigationService.navigate("login");
  }
}
