import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { articlesContent, formatDate } from "@/content/pages";
import { getArticle } from "@/content/articles";
import { Locale } from "@/types/site";
import { getLocalizedPath } from "@/utils/locale";
import { buildMetadata } from "@/utils/metadata";

type ArticlePageParams = { locale: Locale; slug: string };

export async function generateMetadata({ params }: { params: Promise<ArticlePageParams> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(locale, slug);

  if (!article) {
    return {};
  }

  return buildMetadata({
    locale,
    path: `/articles/${slug}`,
    title: article.title,
    description: article.excerpt,
    image: article.coverImage,
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<ArticlePageParams> }) {
  const { locale, slug } = await params;
  const article = getArticle(locale, slug);

  if (!article) {
    notFound();
  }

  const content = articlesContent[locale];
  const t = await getTranslations({ locale, namespace: "common" });
  const isArabic = locale === "ar";

  return (
    <SiteSection bordered>
      <SiteContainer>
        <Stack spacing={4} sx={{ maxWidth: 820, mx: "auto", width: "100%", pt: { xs: 4, md: 6 } }}>
          <Button
            href={getLocalizedPath(locale, "/articles")}
            variant="text"
            color="inherit"
            startIcon={isArabic ? <ArrowForwardIcon /> : <ArrowBackIcon />}
            sx={{ alignSelf: "flex-start", px: 0 }}
          >
            {content.backToArticles}
          </Button>

          <Stack spacing={2}>
            <Chip
              label={article.category}
              size="small"
              dir="ltr"
              sx={{ alignSelf: "flex-start", bgcolor: "transparent", border: "1px solid", borderColor: "divider", color: "text.secondary" }}
            />
            <Typography variant="h1" component="h1">
              {article.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {formatDate(locale, article.publishedAt)} · {article.readingTime} {t("minutes")}
            </Typography>
          </Stack>

          <Stack spacing={2.5}>
            {article.content.map((paragraph, index) => (
              <Typography key={index} color="text.secondary" sx={{ fontSize: "1.05rem", lineHeight: isArabic ? 1.9 : 1.75 }}>
                {paragraph}
              </Typography>
            ))}
          </Stack>

          <Box sx={{ pt: { xs: 2, md: 3 }, borderTop: "1px solid", borderColor: "divider" }}>
            <Button
              href={getLocalizedPath(locale, "/consultation")}
              variant="contained"
              size="large"
              data-analytics-event="book_consultation_click"
              data-analytics-location="article"
              data-analytics-label={t("bookConsultation")}
              data-analytics-destination="consultation_page"
            >
              {t("bookConsultation")}
            </Button>
          </Box>
        </Stack>
      </SiteContainer>
    </SiteSection>
  );
}
