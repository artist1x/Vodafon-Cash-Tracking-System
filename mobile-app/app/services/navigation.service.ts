// services/navigation.service.ts
import { Frame } from "@nativescript/core";

export class NavigationService {
  private static instance: NavigationService;
  private frame: Frame | null = null;

  private constructor() {}

  static getInstance(): NavigationService {
    if (!NavigationService.instance) {
      NavigationService.instance = new NavigationService();
    }
    return NavigationService.instance;
  }

  setNavigation(frame: Frame) {
    console.log("Setting navigation frame");
    this.frame = frame;
  }

  hasFrame(): boolean {
    return this.frame !== null;
  }

  navigate(pageName: string, options: any = {}) {
    console.log("Starting navigation to:", pageName);

    try {
      if (!this.frame) {
        console.error("No frame set, trying to get topmost frame");
        this.frame = Frame.topmost();
        if (!this.frame) {
          throw new Error("No navigation frame available");
        }
      }

      const modulePath = `views/${pageName}/${pageName}-page`;
      console.log("Navigating to module path:", modulePath);

      this.frame.navigate({
        moduleName: modulePath,
        clearHistory: pageName === "login",
        ...options,
      });

      console.log("Navigation completed");
      console.log("Request Navigated to " + pageName);
    } catch (error) {
      console.error("Navigation error:", error);
      throw error;
    }
  }

  goBack() {
    const frame = this.frame || Frame.topmost();
    if (frame?.canGoBack()) {
      frame.goBack();
    }
  }
}
