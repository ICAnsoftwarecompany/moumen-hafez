import type { Metadata } from "next";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { BookingCalendarPreview } from "@/components/consultation/BookingCalendarPreview";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HomeSectionIndicator } from "@/components/sections/HomeSectionIndicator";
import { siteConfig } from "@/config/site";
import { businessAreas, homeContent, thinkingSteps } from "@/content/pages";
import { Locale } from "@/types/site";
import { getLocalizedPath } from "@/utils/locale";
import { buildMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;

  return buildMetadata({
    locale,
    title: locale === "ar" ? "مؤمن حافظ | الأعمال والتكنولوجيا" : "Moumen Hafez | Business & Technology",
    description: locale === "ar" ? siteConfig.descriptionAr : siteConfig.descriptionEn,
  });
}

function SectionLead({ number, title, text }: { number: string; title: string; text?: string }) {
  return (
    <Stack spacing={1.5} sx={{ mb: { xs: 4, md: 6 }, maxWidth: 860, minWidth: 0 }}>
      <Typography color="text.secondary" sx={{ fontWeight: 800, letterSpacing: 0 }}>
        {number}
      </Typography>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      {text ? (
        <Typography color="text.secondary" sx={{ maxWidth: 760, fontSize: { xs: "1rem", md: "1.08rem" } }}>
          {text}
        </Typography>
      ) : null}
    </Stack>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = homeContent[locale];
  const homeSections = [
    { id: "intro", number: "01", label: content.heroEyebrow },
    { id: "business", number: "02", label: content.sections.business },
    { id: "thinking", number: "03", label: content.sections.thinking },
    { id: "experience", number: "04", label: content.sections.experience },
    { id: "contact", number: "05", label: content.sections.contact },
  ];
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.nameEn,
    alternateName: siteConfig.nameAr,
    jobTitle: "Business & Technology",
    description: locale === "ar" ? siteConfig.descriptionAr : siteConfig.descriptionEn,
    image: siteConfig.profileImage,
    url: `${siteConfig.domain}${getLocalizedPath(locale)}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <HomeSectionIndicator sections={homeSections} locale={locale} />

      <EditorialHero
        id="intro"
        locale={locale}
        eyebrow={content.heroEyebrow}
        title={content.heroTitle}
        description={`${content.heroTagline}. ${content.heroDescription}`}
        backgroundWord="MOUMEN HAFEZ"
        cta={{
          label: content.cta,
          href: getLocalizedPath(locale, "/consultation"),
          analyticsEvent: "book_consultation_click",
          analyticsLocation: "hero",
          analyticsDestination: "consultation_page",
        }}
        showPortrait
        scrollTargetId="business"
      />

      <SiteSection id="business" fullScreen bordered>
        <SiteContainer>
          <SectionLead
            number={content.sections.business}
            title={locale === "ar" ? "الأعمال × التكنولوجيا" : "Business × Technology"}
            text={content.businessIntro}
          />
          <Grid container spacing={0} sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            {businessAreas[locale].map(([title, description], index) => (
              <Grid key={title} size={{ xs: 12, md: 6 }}>
                <Reveal index={index}>
                  <Box sx={{ py: { xs: 2.5, md: 3 }, borderBottom: "1px solid", borderColor: "divider", minWidth: 0 }}>
                    <Typography variant="caption" color="text.secondary" dir="ltr">
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1 }}>
                      {title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 560 }}>
                      {description}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </SiteContainer>
      </SiteSection>

      <SiteSection id="thinking" fullScreen bordered>
        <SiteContainer>
          <SectionLead
            number={content.sections.thinking}
            title={locale === "ar" ? "أفهم العمل قبل اختيار التكنولوجيا." : "Understand the business before choosing technology."}
            text={content.thinkingIntro}
          />
          <Stack sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            {thinkingSteps[locale].map(([word, description], index) => (
              <Reveal key={word} index={index}>
                <Box sx={{ py: { xs: 2.5, md: 3.2 }, borderBottom: "1px solid", borderColor: "divider", minWidth: 0 }}>
                  <Typography sx={{ fontSize: "clamp(2rem, 9vw, 5.8rem)", lineHeight: 1, fontWeight: 750 }} dir="ltr">
                    {word}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 720 }}>
                    {description}
                  </Typography>
                </Box>
              </Reveal>
            ))}
          </Stack>
        </SiteContainer>
      </SiteSection>

      <ExperienceSection locale={locale} number={content.sections.experience} />

      <SiteSection id="contact" fullScreen bordered>
        <SiteContainer>
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ maxWidth: 880 }}>
                <Typography color="text.secondary" sx={{ fontWeight: 800, mb: 1.5 }}>
                  {content.sections.contact}
                </Typography>
                <Typography variant="h2" component="h2">
                  {content.contactTitle}
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
                  {content.contactText}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4 }}>
                  <Button
                    href={getLocalizedPath(locale, "/consultation")}
                    variant="contained"
                    size="large"
                    data-analytics-event="book_consultation_click"
                    data-analytics-location="contact"
                    data-analytics-label={content.cta}
                    data-analytics-destination="consultation_page"
                    sx={{ width: { xs: "100%", sm: "auto" } }}
                  >
                    {content.cta}
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <BookingCalendarPreview
                href={getLocalizedPath(locale, "/consultation")}
                ariaLabel={content.bookingPreview.ariaLabel}
                monthLabel={content.bookingPreview.monthLabel}
                durationLabel={content.bookingPreview.durationLabel}
                meetingLabel={content.bookingPreview.meetingLabel}
                selectLabel={content.bookingPreview.selectLabel}
              />
            </Grid>
          </Grid>
        </SiteContainer>
      </SiteSection>
    </>
  );
}
