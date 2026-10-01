export type AnalyticsEvent =
  | "click_whatsapp"
  | "click_phone"
  | "click_maps"
  | "click_instagram"
  | "click_schedule"
  | "submit_contact_form";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event });
  window.gtag?.("event", event);
}
