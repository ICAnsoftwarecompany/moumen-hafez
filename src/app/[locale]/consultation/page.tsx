import type { Metadata } from "next";
import {
  BookingSteps,
  ConsultationBooking,
  ConsultationCTA,
  ConsultationFAQ,
  ConsultationOverview,
  ConsultationTopics,
} from "@/components/consultation/ConsultationSections";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { consultationContent } from "@/content/pages";
import { Locale } from "@/types/site";
import { buildMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata({
    locale,
    path: "/consultation",
    title: locale === "ar" ? "احجز استشارة تقنية للأعمال" : "Book a Business Technology Consultation",
    description:
      locale === "ar"
        ? "احجز مكالمة استشارية لمدة 30 دقيقة لمناقشة احتياجات نشاطك، واختيار الأنظمة والحلول التقنية المناسبة مثل ERP وCRM وPOS والأتمتة."
        : "Book a 30-minute consultation to discuss your business needs and identify suitable technology solutions across ERP, CRM, POS, and automation.",
  });
}

export default async function ConsultationPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = consultationContent[locale];

  return (
    <>
      <EditorialHero
        locale={locale}
        eyebrow={content.eyebrow}
        title={content.title}
        description={`${content.description} ${content.supportingLine}`}
        backgroundWord={content.backgroundWord}
        cta={{
          label: content.chooseTime,
          href: "#booking-calendar",
          analyticsEvent: "book_consultation_click",
          analyticsLocation: "consultation",
          analyticsDestination: "booking_calendar",
        }}
        scrollTargetId="consultation-overview"
      />
      <div id="consultation-overview">
        <ConsultationOverview locale={locale} />
      </div>
      <ConsultationTopics locale={locale} />
      <BookingSteps locale={locale} />
      <ConsultationBooking locale={locale} />
      <ConsultationFAQ locale={locale} />
      <ConsultationCTA locale={locale} />
    </>
  );
}
