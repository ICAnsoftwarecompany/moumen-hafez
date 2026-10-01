import { Locale, locales } from "@/types/site";

export const defaultLocale: Locale = "ar";

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getDirection(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  if (isLocale(segments[1])) {
    segments[1] = nextLocale;
    return segments.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}${pathname === "/" ? "" : pathname}`;
}

export function getLocalizedPath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath === "/" ? `/${locale}` : `/${locale}${cleanPath}`;
}

export function hasValue(value?: string) {
  return Boolean(value && value.trim());
}

export function isExternalUrl(value?: string) {
  const candidate = value?.trim();

  if (!candidate) {
    return false;
  }

  try {
    const url = new URL(candidate);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
