import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { HeroPortrait } from "@/components/sections/HeroPortrait";
import { HeroWordLayer } from "@/components/sections/HeroWordLayer";
import { siteConfig } from "@/config/site";
import { Locale } from "@/types/site";

type EditorialHeroProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  description?: string;
  backgroundWord: string;
  cta?: {
    label: string;
    href: string;
    analyticsEvent?: "book_consultation_click" | "cta_click";
    analyticsLocation?: "hero" | "consultation" | "about";
    analyticsDestination?: string;
  };
  showPortrait?: boolean;
  id?: string;
  scrollTargetId?: string;
};

const RISE_EASE = "cubic-bezier(0.16,1,0.3,1)";

export function EditorialHero({
  locale,
  eyebrow,
  title,
  description,
  backgroundWord,
  cta,
  showPortrait = false,
  id,
  scrollTargetId,
}: EditorialHeroProps) {
  const isArabic = locale === "ar";
  const nameLines = backgroundWord.split(" ");
  const splitDescription = description?.startsWith(siteConfig.tagline)
    ? description.replace(`${siteConfig.tagline}.`, "").trim()
    : description;
  const tagline = description?.startsWith(siteConfig.tagline) ? siteConfig.tagline : undefined;

  return (
    <SiteSection id={id} fullScreen>
      <SiteContainer>
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: showPortrait ? 650 : 430, md: showPortrait ? 760 : 620 },
            display: "grid",
            alignItems: showPortrait ? "center" : "start",
            overflow: "clip",
            borderBottom: "1px solid",
            borderColor: "divider",
            pb: { xs: 4, md: 0 },
            perspective: "1200px",
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              opacity: 0.24,
              backgroundImage:
                "linear-gradient(rgba(232,221,201,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(232,221,201,0.10) 1px, transparent 1px)",
              backgroundSize: { xs: "34px 34px", md: "52px 52px" },
              maskImage: "radial-gradient(circle at 50% 50%, black 0%, transparent 72%)",
              pointerEvents: "none",
            }}
          />

          {showPortrait ? (
            <HeroPortrait locale={locale} nameLines={nameLines} src={siteConfig.profileImage} alt="" />
          ) : (
            <HeroWordLayer
              lines={nameLines}
              showPortrait={false}
              sx={{
                zIndex: 1,
                "--word-base-opacity": 0.36,
                opacity: 0,
                animation: "hero-word-fade 900ms cubic-bezier(0.16,1,0.3,1) both, hero-word-breathe 8s ease-in-out 1.1s infinite",
              }}
            />
          )}

          <Stack
            spacing={{ xs: 1.45, md: 1.75 }}
            sx={{
              position: "relative",
              zIndex: 4,
              width: showPortrait ? { xs: "100%", md: "46%" } : "100%",
              maxWidth: showPortrait ? { xs: "100%", md: 680 } : 860,
              ml: showPortrait && isArabic ? "auto" : undefined,
              mr: showPortrait && !isArabic ? "auto" : undefined,
              pt: showPortrait
                ? { xs: 46, md: 8 }
                : {
                    xs: nameLines.length > 1 ? 21 : 13,
                    sm: nameLines.length > 1 ? 31 : 19,
                    md: nameLines.length > 1 ? 47 : 28,
                  },
              minWidth: 0,
              textAlign: "start",
              textShadow: showPortrait ? "0 2px 18px rgba(0,0,0,0.72)" : undefined,
            }}
          >
            <Typography
              color="primary.main"
              sx={{
                fontWeight: 850,
                fontSize: { xs: "0.86rem", md: "0.95rem" },
                letterSpacing: 0,
                pb: 0.75,
                borderBottom: showPortrait ? "1px solid rgba(255,255,255,0.16)" : undefined,
                width: "fit-content",
                opacity: 0,
                animation: `hero-rise 800ms ${RISE_EASE} 60ms both`,
              }}
            >
              {eyebrow}
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              dir={title === "Moumen Hafez" ? "ltr" : undefined}
              sx={{
                textAlign: title === "Moumen Hafez" && isArabic ? "right" : undefined,
                maxWidth: { xs: 360, md: 680 },
                opacity: 0,
                animation: `hero-rise 850ms ${RISE_EASE} 130ms both`,
              }}
            >
              {title}
            </Typography>
            {tagline ? (
              <Typography
                component="p"
                sx={{
                  color: "text.primary",
                  fontWeight: 800,
                  fontSize: { xs: "1.02rem", md: "1.16rem" },
                  lineHeight: 1.35,
                  maxWidth: 620,
                  opacity: 0,
                  animation: `hero-rise 850ms ${RISE_EASE} 200ms both`,
                }}
              >
                <bdi>{tagline}</bdi>
              </Typography>
            ) : null}
            {splitDescription ? (
              <Typography
                component="p"
                color="text.secondary"
                sx={{
                  maxWidth: 680,
                  fontSize: { xs: "1rem", md: "1.08rem" },
                  lineHeight: locale === "ar" ? 1.85 : 1.68,
                  opacity: 0,
                  animation: `hero-rise 850ms ${RISE_EASE} 260ms both`,
                }}
              >
                {splitDescription}
              </Typography>
            ) : null}
            {cta ? (
              <Button
                href={cta.href}
                data-analytics-event={cta.analyticsEvent}
                data-analytics-location={cta.analyticsLocation}
                data-analytics-label={cta.label}
                data-analytics-destination={cta.analyticsDestination}
                variant="contained"
                size="large"
                endIcon={
                  <ArrowOutwardIcon
                    sx={{
                      transition: `transform 260ms ${RISE_EASE}`,
                      transform: isArabic ? "scaleX(-1)" : "none",
                    }}
                  />
                }
                sx={{
                  width: { xs: "100%", sm: "fit-content" },
                  mt: { xs: 1.2, md: 1.6 },
                  alignSelf: showPortrait ? { xs: "stretch", sm: "center", md: "flex-end" } : undefined,
                  opacity: 0,
                  animation: `hero-rise 850ms ${RISE_EASE} 330ms both`,
                  "&:hover .MuiButton-endIcon, &:focus-visible .MuiButton-endIcon": {
                    transform: isArabic ? "scaleX(-1) translateX(4px)" : "translate(4px, -4px)",
                  },
                }}
              >
                {cta.label}
              </Button>
            ) : null}
          </Stack>

          {showPortrait && scrollTargetId ? (
            <Box
              component="a"
              href={`#${scrollTargetId}`}
              aria-label={isArabic ? "انتقل إلى القسم التالي" : "Scroll to next section"}
              sx={{
                position: "absolute",
                zIndex: 5,
                insetInlineStart: "50%",
                bottom: { xs: 14, md: 22 },
                transform: "translateX(-50%)",
                display: { xs: "none", sm: "flex" },
                flexDirection: "column",
                alignItems: "center",
                gap: 0.25,
                color: "text.secondary",
                opacity: 0,
                animation: `hero-rise 900ms ${RISE_EASE} 550ms both`,
                "&:hover": { color: "text.primary" },
              }}
            >
              <Typography
                variant="caption"
                sx={{ letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 700, fontSize: "0.68rem" }}
              >
                {isArabic ? "استكشف" : "Scroll"}
              </Typography>
              <KeyboardArrowDownIcon
                fontSize="small"
                sx={{ animation: "hero-scroll-cue 2.2s ease-in-out infinite" }}
              />
            </Box>
          ) : null}
        </Box>
      </SiteContainer>
    </SiteSection>
  );
}
