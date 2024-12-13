import { Observable } from "@nativescript/core";
import { API_URL, ENDPOINTS } from "../../config/constants";
import * as connectivity from "@nativescript/core/connectivity";
import { AuthService } from "../../services/auth.service";
import { NavigationService } from "../../services/navigation.service";

export class LoginViewModel extends Observable {
  private _username: string = "";
  private _password: string = "";
  private _logMessages: string = "";
  private _errorMessage: string = "";
  private authService: AuthService;
  private navigationService: NavigationService;

  constructor() {
    super();
    this.authService = AuthService.getInstance();
    this.navigationService = NavigationService.getInstance();
    this.addLog("Login View Model Initialized");
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
    this.notifyPropertyChange("username", value);
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
    this.notifyPropertyChange("password", value);
  }

  get logMessages(): string {
    return this._logMessages;
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  set errorMessage(value: string) {
    this._errorMessage = value;
    this.notifyPropertyChange("errorMessage", value);
  }

  public async onLogin() {
    if (!this._username || !this._password) {
      this.errorMessage = "Please enter username and password.";
      this.addLog("Please enter username and password.");
      return;
    }

    try {
      this.addLog("Try to login...");
      const connectionType = connectivity.getConnectionType();
      if (connectionType === connectivity.connectionType.none) {
        this.errorMessage = "No internet Connection";
        this.addLog("No internet Connection");
        return;
      }

      const success = await this.authService.login(
        this._username,
        this._password
      );

      if (success) {
        this.addLog("Success Login");
        console.log("Trying to login in ");
        this.navigationService.navigate("dashboard", { clearHistory: true });
        console.log("Request Navigated to dashboard");
      } else {
        this.errorMessage = "Login Failed , Please try again.";
        this.addLog("Login Failed ");
      }
    } catch (error) {
      console.error("Error to login : ", error);
      this.errorMessage = `Error to login  ${error.message}`;
    }
  }

  private addLog(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    this._logMessages = `[${timestamp}] ${message}\n${this._logMessages}`;
    this.notifyPropertyChange("logMessages", this._logMessages);
    console.log(message);
  }
}
