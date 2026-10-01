import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Locale } from "@/types/site";
import { getLocalizedPath } from "@/utils/locale";

type PageMetadata = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

export function buildMetadata({ locale, path = "", title, description, image, type = "website" }: PageMetadata): Metadata {
  const url = getLocalizedPath(locale, path);
  const alternateLocale = locale === "ar" ? "en" : "ar";
  const imageUrl = image || siteConfig.shareImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ar: getLocalizedPath("ar", path),
        en: getLocalizedPath("en", path),
      },
    },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: siteConfig.nameEn,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      alternateLocale: alternateLocale === "ar" ? "ar_EG" : "en_US",
      images: [{ url: imageUrl, width: siteConfig.shareImageWidth, height: siteConfig.shareImageHeight, alt: siteConfig.nameEn }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
