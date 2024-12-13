import { Application, Frame } from "@nativescript/core";
import { AuthService } from "./services/auth.service";
import { StorageService } from "./services/storage.service";
import { NavigationService } from "./services/navigation.service";
import { SMSService } from "./services/sms.service";

// Initialize core services
const storageService = StorageService.getInstance();
const authService = AuthService.getInstance();
const navigationService = NavigationService.getInstance();

// Initialize SMS Service
const smsService = SMSService.getInstance();

let mainFrame: Frame;

Application.on(Application.launchEvent, async () => {
  console.log("Application launching...");
  // Create and initialize the main frame
  mainFrame = new Frame();
  navigationService.setNavigation(mainFrame);
  console.log("Navigation frame initialized");

  // Initialize SMS monitoring
  if (global.isAndroid) {
    console.log("Initializing SMS monitoring...");
    try {
      const smsInstance = SMSService.getInstance();
      console.log("SMS Service instance created");
    } catch (error) {
      console.error("Error initializing SMS service:", error);
    }
  }

  // Navigate to initial page
  mainFrame.navigate({
    moduleName: "views/login/login-page",
    clearHistory: true,
  });
});

Application.on(Application.displayedEvent, () => {
  console.log("Application displayed event triggered");
  if (!navigationService.hasFrame()) {
    const topFrame = Frame.topmost();
    if (topFrame) {
      navigationService.setNavigation(topFrame);
      console.log("Navigation frame set from topmost");
    }
  }
});

Application.run({ create: () => mainFrame });
