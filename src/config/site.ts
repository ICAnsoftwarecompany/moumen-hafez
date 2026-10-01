import type { Metadata } from "next";
import { defaultLocale } from "@/utils/locale";

export const siteConfig = {
  nameAr: "مؤمن حافظ",
  nameEn: "Moumen Hafez",
  tagline: "Technology for Better Business",
  roleAr: "الأعمال والتكنولوجيا",
  roleEn: "Business & Technology",
  descriptionAr:
    "مؤمن حافظ يساعد أصحاب الأعمال والمديرين على فهم التكنولوجيا، اختيار الحل المناسب، واستخدامه لبناء عمل أكثر تنظيمًا وكفاءة وقابلية للنمو.",
  descriptionEn:
    "Moumen Hafez helps businesses understand, choose, and use technology to operate better and grow smarter.",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  analytics: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@moumenhafez.com",
  consultation: {
    bookingUrl:
      process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL ||
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3cGo2ZCRGDbolL4lVrq26bea1Wq042D0hqMDC5yU7iVwNSmNpfRV5H_3IiFyqy1mgILZJhGCnT?gv=true",
  },
  links: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    // TODO: no confirmed WhatsApp number yet. Once set, NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/<number>
    // is enough to make the footer button appear — no code change needed.
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  },
  profileImage: "/images/brand/Hero.png",
  shareImage: "/images/brand/og-cover.png",
  shareImageWidth: 1200,
  shareImageHeight: 630,
  defaultLocale,
} as const;

// Shared between src/app/(root)/layout.tsx and src/app/[locale]/layout.tsx, which
// are separate Next.js root layouts (each with its own <html>) and so cannot share
// a single parent layout, but should not duplicate this metadata object either.
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.nameEn} | ${siteConfig.roleEn}`,
    template: `%s | ${siteConfig.nameEn}`,
  },
  description:
    "Practical business and technology guidance on operations, systems, automation, and AI by Moumen Hafez.",
};
