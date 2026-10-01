import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { Reveal } from "@/components/motion/Reveal";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { articlesContent, formatDate } from "@/content/pages";
import { getArticles } from "@/content/articles";
import { Locale } from "@/types/site";
import { getLocalizedPath } from "@/utils/locale";
import { buildMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const content = articlesContent[locale];

  return buildMetadata({
    locale,
    path: "/articles",
    title: locale === "ar" ? "مقالات مؤمن حافظ | الأعمال والتكنولوجيا" : "Articles by Moumen Hafez | Business & Technology",
    description: content.description,
  });
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const content = articlesContent[locale];
  const t = await getTranslations({ locale, namespace: "common" });
  const articles = getArticles(locale);

  return (
    <>
      <EditorialHero
        locale={locale}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        backgroundWord={content.backgroundWord}
      />

      <SiteSection bordered>
        <SiteContainer>
          {articles.length ? (
            <Grid container spacing={{ xs: 2.5, md: 3 }}>
              {articles.map((article, index) => (
                <Grid key={article.slug} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Reveal index={index}>
                    <Box
                      component="a"
                      href={getLocalizedPath(locale, `/articles/${article.slug}`)}
                      sx={{
                        display: "block",
                        height: "100%",
                        p: { xs: 2.25, md: 2.5 },
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: "background.paper",
                        transition: "border-color 180ms ease",
                        "&:hover": { borderColor: "primary.main" },
                      }}
                    >
                      <Stack spacing={1.5} sx={{ height: "100%" }}>
                        <Chip
                          label={article.category}
                          size="small"
                          dir="ltr"
                          sx={{ alignSelf: "flex-start", bgcolor: "transparent", border: "1px solid", borderColor: "divider", color: "text.secondary" }}
                        />
                        <Typography variant="h5">{article.title}</Typography>
                        <Typography color="text.secondary" sx={{ flexGrow: 1 }}>
                          {article.excerpt}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatDate(locale, article.publishedAt)} · {article.readingTime} {t("minutes")}
                        </Typography>
                      </Stack>
                    </Box>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography color="text.secondary">{content.empty}</Typography>
          )}
        </SiteContainer>
      </SiteSection>
    </>
  );
}
