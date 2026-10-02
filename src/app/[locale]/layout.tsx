import { ReactNode } from "react";
import { notFound } from "next/navigation";
import Script from "next/script";
import { setRequestLocale } from "next-intl/server";
import { cairo, inter } from "@/app/fonts";
import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { PageShell } from "@/components/layout/PageShell";
import { rootMetadata, siteConfig } from "@/config/site";
import { messages } from "@/i18n/messages";
import { ClientProviders } from "@/theme/ClientProviders";
import { Locale, locales } from "@/types/site";
import { getDirection, isLocale } from "@/utils/locale";
import "../globals.css";

export const metadata = rootMetadata;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const direction = getDirection(locale);
  const measurementId = siteConfig.analytics.measurementId;
  const analyticsEnabled = process.env.NODE_ENV === "production" && Boolean(measurementId);
  setRequestLocale(locale);

  return (
    <html lang={locale} dir={direction} className={`${cairo.variable} ${inter.variable}`}>
      <body>
        <ClientProviders direction={direction} locale={locale} messages={messages[locale]}>
          <AnalyticsProvider>
            <PageShell locale={locale}>{children}</PageShell>
          </AnalyticsProvider>
        </ClientProviders>
        {analyticsEnabled ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${measurementId}', { send_page_view: false });
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
