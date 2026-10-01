import type { Metadata } from "next";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { aboutContent } from "@/content/pages";
import { Locale } from "@/types/site";
import { getLocalizedPath } from "@/utils/locale";
import { buildMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = aboutContent[locale];

  return buildMetadata({
    locale,
    path: "/about",
    title: locale === "ar" ? "عن مؤمن حافظ | الأعمال والتكنولوجيا" : "About Moumen Hafez | Business & Technology",
    description: content.intro,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = aboutContent[locale];

  return (
    <>
      <EditorialHero
        locale={locale}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        backgroundWord={content.backgroundWord}
      />
      <SiteSection bordered>
        <SiteContainer>
          <Stack sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            {content.stages.map(([title, paragraph], index) => (
              <Reveal key={title} index={index}>
                <Box sx={{ py: { xs: 3, md: 4.5 }, borderBottom: "1px solid", borderColor: "divider" }}>
                  <Grid container spacing={{ xs: 1.5, md: 4 }} sx={{ alignItems: "baseline", minWidth: 0 }}>
                    <Grid size={{ xs: 12, md: 2 }}>
                      <Typography variant="h2" dir="ltr">
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography variant="h4">{title}</Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography color="text.secondary" sx={{ maxWidth: 680 }}>
                        {paragraph}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Reveal>
            ))}
          </Stack>

          <Box sx={{ pt: { xs: 5, md: 8 }, maxWidth: 760 }}>
            <Typography variant="h3" component="h2">
              {locale === "ar" ? "الفكرة ليست بيع التكنولوجيا، بل جعلها تخدم العمل." : "The point is not selling technology, but making it serve the work."}
            </Typography>
            <Button
              href={getLocalizedPath(locale, "/consultation")}
              variant="contained"
              size="large"
              data-analytics-event="book_consultation_click"
              data-analytics-location="about"
              data-analytics-label={locale === "ar" ? "ناقش تحديًا في عملك" : "Discuss a business challenge"}
              data-analytics-destination="consultation_page"
              sx={{ mt: 3, width: { xs: "100%", sm: "auto" } }}
            >
              {locale === "ar" ? "ناقش تحديًا في عملك" : "Discuss a business challenge"}
            </Button>
          </Box>
        </SiteContainer>
      </SiteSection>
    </>
  );
}
