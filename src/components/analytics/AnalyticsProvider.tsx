"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  AnalyticsEventName,
  AnalyticsLocation,
  isAnalyticsEnabled,
  trackEvent,
  trackEventOnce,
  trackPageView,
} from "@/utils/analytics";

const eventNames = new Set<AnalyticsEventName>([
  "consultation_view",
  "book_consultation_click",
  "booking_calendar_view",
  "whatsapp_click",
  "contact_click",
  "email_click",
  "linkedin_click",
  "cta_click",
  "article_view",
]);

function getLocale(pathname: string) {
  return pathname.split("/")[1] === "en" ? "en" : "ar";
}

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string>("");

  useEffect(() => {
    if (!isAnalyticsEnabled() || lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    const locale = getLocale(pathname);
    const pageLocation = window.location.href;
    const common = {
      locale,
      page_path: pathname,
      page_location: pageLocation,
      page_title: document.title,
    } as const;

    trackPageView(common);

    if (pathname === `/${locale}/consultation`) {
      trackEvent("consultation_view", common);
    }

    const articleMatch = pathname.match(/^\/(ar|en)\/articles\/([^/]+)$/);
    if (articleMatch) {
      trackEvent("article_view", {
        ...common,
        article_slug: decodeURIComponent(articleMatch[2]),
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-analytics-event]") : null;
      if (!target) return;

      const eventName = target.dataset.analyticsEvent as AnalyticsEventName | undefined;
      if (!eventName || !eventNames.has(eventName)) return;

      trackEvent(eventName, {
        locale: getLocale(window.location.pathname),
        page_path: window.location.pathname,
        cta_location: target.dataset.analyticsLocation as AnalyticsLocation | undefined,
        cta_label: target.dataset.analyticsLabel,
        destination: target.dataset.analyticsDestination,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return children;
}

export function AnalyticsView({ eventName, location, children }: { eventName: AnalyticsEventName; location: AnalyticsLocation; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const element = ref.current;
    if (!element || !isAnalyticsEnabled()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        trackEventOnce(`${eventName}:${pathname}`, eventName, {
          locale: getLocale(pathname),
          page_path: pathname,
          cta_location: location,
        });
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [eventName, location, pathname]);

  return <div ref={ref}>{children}</div>;
}
