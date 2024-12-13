// main-page.ts
import { EventData, Page } from "@nativescript/core";

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  // هذه الصفحة ستكون مؤقتة فقط حتى تكتمل عملية التهيئة
  page.actionBarHidden = true;
}
