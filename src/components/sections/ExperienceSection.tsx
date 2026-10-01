import { Box, Grid, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { Reveal } from "@/components/motion/Reveal";
import { realExperienceContent } from "@/content/pages";
import { Locale } from "@/types/site";

export function ExperienceSection({ locale, number }: { locale: Locale; number: string }) {
  const content = realExperienceContent[locale];

  return (
    <SiteSection id="experience" fullScreen bordered>
      <SiteContainer>
        <Box component="header" sx={{ maxWidth: 920, mb: { xs: 6, md: 9 } }}>
          <Typography color="text.secondary" sx={{ fontWeight: 800, mb: 1.5 }}>
            {number}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.title}
          </Typography>
          <Typography sx={{ mt: 2.5, maxWidth: 820, fontSize: { xs: "1.05rem", md: "1.18rem" }, lineHeight: 1.9 }}>
            {content.intro}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1.25, maxWidth: 720 }}>
            {content.supportingLine}
          </Typography>
        </Box>

        <Grid container>
          <Grid size={12}>
            <Typography variant="overline" color="primary.main" dir="ltr" sx={{ fontWeight: 800, letterSpacing: 0 }}>
              {content.environmentsLabel}
            </Typography>
            <Typography variant="h4" component="h3" sx={{ mt: 1, mb: 3 }}>
              {content.environmentsTitle}
            </Typography>

            <Stack component="ol" sx={{ m: 0, p: 0, listStyle: "none", borderTop: "1px solid", borderColor: "divider" }}>
              {content.industries.map(([name, description], index) => (
                <Reveal key={name} index={index}>
                  <Box
                    component="li"
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "2.25rem minmax(0, 1fr)", sm: "3rem minmax(0, 0.62fr) minmax(240px, 0.38fr)" },
                      columnGap: { xs: 1.25, sm: 2 },
                      py: { xs: 2.15, md: 2.45 },
                      borderBottom: "1px solid",
                      borderColor: "divider",
                      transition: "border-color 180ms ease, background-color 180ms ease",
                      "&:hover": { borderColor: "primary.main", bgcolor: "rgba(232,221,201,0.025)" },
                    }}
                  >
                    <Typography variant="caption" color="text.secondary" dir="ltr" sx={{ pt: 0.35, fontWeight: 800 }}>
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Box sx={{ minWidth: 0, display: { sm: "contents" } }}>
                      <Typography variant="h6" component="h4" dir="ltr" sx={{ textAlign: "start" }}>
                        {name}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mt: { xs: 0.5, sm: 0 }, lineHeight: 1.75 }}>
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Reveal>
              ))}
            </Stack>
          </Grid>

        </Grid>

        <Box component="aside" aria-label={content.proofLabel} sx={{ mt: { xs: 8, md: 12 }, pt: { xs: 4, md: 5 }, borderTop: "1px solid", borderColor: "divider" }}>
          <Typography variant="h4" component="h3" sx={{ mb: { xs: 3, md: 4 } }}>
            {content.proofLabel}
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {content.proofItems.map(([title, description], index) => (
              <Grid key={title} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Reveal index={index}>
                  <Typography variant="caption" color="text.secondary" dir="ltr" sx={{ fontWeight: 800 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h6" component="h4" sx={{ mt: 0.75 }}>
                    {title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 0.75, lineHeight: 1.75 }}>
                    {description}
                  </Typography>
                </Reveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </SiteContainer>
    </SiteSection>
  );
}
