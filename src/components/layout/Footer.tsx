import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import NextLink from "next/link";
import { Box, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { siteConfig } from "@/config/site";
import { navigationContent } from "@/content/pages";
import { Locale } from "@/types/site";
import { getLocalizedPath, isExternalUrl } from "@/utils/locale";

const pagePaths = [
  ["home", ""],
  ["about", "/about"],
  ["consultation", "/consultation"],
] as const;

export function Footer({ locale }: { locale: Locale }) {
  const copy = navigationContent[locale];
  const year = new Date().getFullYear();
  const brandName = locale === "ar" ? siteConfig.nameAr : siteConfig.nameEn;
  const linkedinHref = siteConfig.links.linkedin;
  const socials = [
    ["WhatsApp", siteConfig.links.whatsapp, WhatsAppIcon],
    ["Facebook", siteConfig.links.facebook, FacebookIcon],
    ["Instagram", siteConfig.links.instagram, InstagramIcon],
  ].filter(([, href]) => isExternalUrl(href as string)) as [string, string, typeof WhatsAppIcon][];

  return (
    <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", bgcolor: "background.default" }}>
      <SiteContainer>
        <Box sx={{ py: { xs: 3, md: 4 }, display: "grid", gap: { xs: 2, md: 2.5 } }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            sx={{
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 3 },
              rowGap: 2,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", flexWrap: "wrap", gap: { xs: 2, sm: 3 }, rowGap: 1 }}>
              <Typography sx={{ fontWeight: 850 }}>
                <bdi>{brandName}</bdi>
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap", gap: 2, rowGap: 0.5 }}>
                {pagePaths.map(([key, path]) => (
                  <Typography
                    key={key}
                    component={NextLink}
                    href={getLocalizedPath(locale, path)}
                    color="text.secondary"
                    sx={{ fontSize: "0.92rem", "&:hover": { color: "text.primary" } }}
                  >
                    {copy[key]}
                  </Typography>
                ))}
              </Stack>
            </Stack>

            <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
              {isExternalUrl(linkedinHref) ? (
                <Tooltip title={locale === "ar" ? "خبرتي الكاملة على LinkedIn" : "Full experience on LinkedIn"}>
                  <IconButton
                    component={NextLink}
                    href={linkedinHref}
                    data-analytics-event="linkedin_click"
                    data-analytics-location="footer"
                    data-analytics-label="LinkedIn"
                    data-analytics-destination="linkedin_profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    sx={{
                      color: "primary.main",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": { borderColor: "primary.main" },
                    }}
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              ) : null}
              {socials.map(([label, href, Icon]) => (
                <IconButton
                  key={label}
                  component={NextLink}
                  href={href}
                  data-analytics-event={label === "WhatsApp" ? "whatsapp_click" : "cta_click"}
                  data-analytics-location="footer"
                  data-analytics-label={label}
                  data-analytics-destination={label === "WhatsApp" ? "whatsapp" : label.toLowerCase()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  sx={{ color: "text.secondary", "&:hover": { color: "text.primary" } }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Stack>

          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.78rem" }}>
            © {year} <bdi>{siteConfig.nameEn}</bdi>. {siteConfig.tagline}.
          </Typography>
        </Box>
      </SiteContainer>
    </Box>
  );
}
