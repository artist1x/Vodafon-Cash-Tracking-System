// views/dashboard/dashboard-page.ts
import { NavigatedData, Page } from "@nativescript/core";
import { DashboardViewModel } from "./dashboard-view-model";

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  if (!page.bindingContext) {
    page.bindingContext = new DashboardViewModel();
  }
}
