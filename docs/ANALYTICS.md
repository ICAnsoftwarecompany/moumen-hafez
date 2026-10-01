# Google Analytics 4

The site uses Google Analytics 4 (GA4) through `gtag.js`. Analytics is intentionally small, centralized, and disabled outside production.

## Configuration

Set the public measurement ID in the deployment environment:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-FEPNBGW7VB
```

The ID is read by `src/app/[locale]/layout.tsx` and `src/utils/analytics.ts`. If it is missing, or `NODE_ENV` is not `production`, scripts and event delivery are disabled without affecting the site.

## Architecture

- `src/app/[locale]/layout.tsx` loads `gtag.js` once with `next/script` and disables GA automatic page views.
- `src/components/analytics/AnalyticsProvider.tsx` records App Router navigation and delegates tracked clicks from `data-analytics-*` attributes.
- `src/utils/analytics.ts` defines allowed event names, parameter types, and the safe `trackEvent` API.
- `AnalyticsView` uses `IntersectionObserver` for one-time component visibility events.

Client-side navigation is tracked from `usePathname()`. Each page view includes `page_path`, `page_location`, `page_title`, and `locale`. A path ref prevents duplicate events from React Strict Mode while allowing a new view after navigating away and returning.

## Event Dictionary

| Event | Purpose | Trigger | Parameters |
| --- | --- | --- | --- |
| `page_view` | Page traffic and locale reporting | Initial localized route and App Router navigation | `locale`, `page_path`, `page_location`, `page_title` |
| `consultation_view` | Consultation funnel entry | Visit `/ar/consultation` or `/en/consultation` | Page parameters |
| `book_consultation_click` | Booking intent | Important CTA to the consultation page or booking calendar | `locale`, `page_path`, `cta_location`, `cta_label`, `destination` |
| `booking_calendar_view` | Calendar exposure | Google Calendar embed reaches 35% visibility | `locale`, `page_path`, `cta_location` |
| `whatsapp_click` | WhatsApp intent | Visible WhatsApp footer link | `locale`, `page_path`, `cta_location`, `cta_label`, safe destination label |
| `linkedin_click` | LinkedIn engagement | LinkedIn footer link | `locale`, `page_path`, `cta_location`, `cta_label`, safe destination label |
| `article_view` | Article readership | Visit a real article detail route | Page parameters, `article_slug` |
| `cta_click` | Other important CTA | Explicitly annotated CTA, currently Facebook/Instagram footer links | CTA parameters |
| `contact_click` | Reserved for a future contact CTA | No current trigger because no dedicated contact CTA exists | CTA parameters |
| `email_click` | Reserved for a future email link | No current trigger because no visible email link exists | CTA parameters |

`cta_location` uses stable values: `header`, `hero`, `footer`, `consultation`, `contact`, `about`, or `article`.

## Adding Tracking

Prefer declarative attributes on the existing link or button:

```tsx
<Button
  href="/ar/consultation"
  data-analytics-event="book_consultation_click"
  data-analytics-location="hero"
  data-analytics-label="احجز مكالمة"
  data-analytics-destination="consultation_page"
>
  احجز مكالمة
</Button>
```

Add any new event name to `AnalyticsEventName` and the provider allowlist. Use lowercase snake case, keep events commercially useful, and use stable English values for locations and destinations.

For a custom client interaction, import `trackEvent` from `@/utils/analytics`. Do not call `gtag` directly in components.

## Privacy

Never send PII to GA4. Do not include names, email addresses, phone numbers, form/message content, or raw WhatsApp/mailto destinations. Labels and destinations must remain generic business metadata.

## Google Calendar Limitation

The appointment schedule runs in a cross-origin Google iframe. The site can reliably record `booking_calendar_view`, but cannot verify a completed booking. Therefore, there is deliberately no `booking_complete` event. Add one only when Google provides a trustworthy completion callback or a server-side confirmation integration.

## Testing

Analytics is disabled during `next dev` to keep production data clean. To test locally without sending data, inspect the production build and confirm the scripts and attributes are present. For live verification:

1. Deploy with `NEXT_PUBLIC_GA_MEASUREMENT_ID` set.
2. Open GA4 **Reports > Realtime**.
3. Visit `/ar`, navigate to `/ar/consultation`, reveal the calendar, and click a booking CTA.
4. Repeat in `/en` and confirm the `locale` parameter changes.
5. Click the visible LinkedIn or WhatsApp link and inspect event parameters.

For DebugView, enable Google Analytics debug mode only in a controlled test deployment or with Google Analytics Debugger, then open **Admin > DebugView**. Do not enable debug mode globally in production.
