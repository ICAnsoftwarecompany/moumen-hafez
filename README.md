# Moumen Hafez Personal Brand Website

Professional bilingual personal-brand website for Moumen Hafez, built with Next.js App Router, TypeScript, Material UI, Emotion, next-intl, and local content data.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root path redirects to `/ar`.

## Environment

Copy `.env.example` to `.env.local` and fill what is available:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@example.com
NEXT_PUBLIC_GOOGLE_BOOKING_URL=https://calendar.google.com/calendar/appointments/schedules/your-schedule-id?gv=true
NEXT_PUBLIC_LINKEDIN_URL=https://www.linkedin.com/in/your-profile
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_INSTAGRAM_URL=
```

Empty contact and social values are not rendered publicly.

## Edit Site Settings

Update central settings in `src/config/site.ts`:

- `email`
- `links.linkedin`
- `links.facebook`
- `links.instagram`
- `profileImage`
- `shareImage`

## Routes

- `/ar`
- `/ar/about`
- `/ar/consultation`
- `/ar/contact`
- `/en`
- `/en/about`
- `/en/consultation`
- `/en/contact`

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
