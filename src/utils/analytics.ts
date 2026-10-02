import { siteConfig } from "@/config/site";

export type AnalyticsEventName =
  | "consultation_view"
  | "book_consultation_click"
  | "booking_calendar_view"
  | "whatsapp_click"
  | "contact_click"
  | "email_click"
  | "linkedin_click"
  | "cta_click"
  | "article_view";

export type AnalyticsLocation = "header" | "hero" | "footer" | "consultation" | "contact" | "about" | "article";

export type AnalyticsParameters = {
  locale?: "ar" | "en";
  page_path?: string;
  page_location?: string;
  page_title?: string;
  cta_location?: AnalyticsLocation;
  cta_label?: string;
  destination?: string;
  article_slug?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const measurementId = siteConfig.analytics.measurementId;
const analyticsEnabled = process.env.NODE_ENV === "production" && Boolean(measurementId);
const trackedOnce = new Set<string>();

function queueGtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function isAnalyticsEnabled() {
  return analyticsEnabled;
}

export function trackPageView(parameters: Required<Pick<AnalyticsParameters, "page_path" | "page_location" | "page_title">> & Pick<AnalyticsParameters, "locale">) {
  if (!analyticsEnabled || typeof window === "undefined" || !measurementId) return;

  queueGtag("event", "page_view", {
    send_to: measurementId,
    ...parameters,
  });
}

export function trackEvent(eventName: AnalyticsEventName, parameters: AnalyticsParameters = {}) {
  if (!analyticsEnabled || typeof window === "undefined") return;
  queueGtag("event", eventName, parameters);
}

export function trackEventOnce(key: string, eventName: AnalyticsEventName, parameters: AnalyticsParameters = {}) {
  if (trackedOnce.has(key)) return;
  trackedOnce.add(key);
  trackEvent(eventName, parameters);
}
