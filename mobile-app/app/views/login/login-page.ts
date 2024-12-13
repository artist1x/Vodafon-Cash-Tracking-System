import { EventData, Page } from "@nativescript/core";
import { LoginViewModel } from "./login-view-model";

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  if (!page.bindingContext) {
    page.bindingContext = new LoginViewModel();
  }
  console.log("Login page loaded");
  
}
