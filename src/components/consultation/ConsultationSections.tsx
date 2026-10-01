import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";
import { Reveal } from "@/components/motion/Reveal";
import { BookingCalendar } from "@/components/consultation/BookingCalendar";
import { AnalyticsView } from "@/components/analytics/AnalyticsProvider";
import { siteConfig } from "@/config/site";
import { consultationContent } from "@/content/pages";
import { Locale } from "@/types/site";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <Box component="header" sx={{ maxWidth: 820, mb: { xs: 4, md: 6 } }}>
      <Typography color="text.secondary" sx={{ fontWeight: 800, mb: 1.25 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      {description ? (
        <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 720 }}>
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}

const overviewIcons = [AccessTimeOutlinedIcon, VideoCallOutlinedIcon, PaymentsOutlinedIcon, AdsClickOutlinedIcon];

export function ConsultationOverview({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];

  return (
    <SiteSection bordered>
      <SiteContainer>
        <Grid container sx={{ borderTop: "1px solid", borderColor: "divider" }}>
          {content.overview.map(([label, value], index) => {
            const Icon = overviewIcons[index];
            return (
              <Grid key={label} size={{ xs: 12, sm: 6, lg: 3 }}>
                <Reveal index={index}>
                  <Box
                    sx={{
                      minHeight: { sm: 155 },
                      py: 3,
                      px: { xs: 0, sm: 2.5 },
                      borderBottom: "1px solid",
                      borderInlineStart: { lg: index === 0 ? 0 : "1px solid" },
                      borderColor: "divider",
                    }}
                  >
                    <Icon aria-hidden sx={{ color: "primary.main", fontSize: 24 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1.5 }}>
                      {label}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 0.5 }}>
                      {value}
                    </Typography>
                  </Box>
                </Reveal>
              </Grid>
            );
          })}
        </Grid>
      </SiteContainer>
    </SiteSection>
  );
}

export function ConsultationTopics({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];

  return (
    <SiteSection bordered>
      <SiteContainer>
        <SectionHeading eyebrow={content.topicsEyebrow} title={content.topicsTitle} description={content.topicsIntro} />
        <Grid component="ul" container sx={{ m: 0, p: 0, listStyle: "none", borderTop: "1px solid", borderColor: "divider" }}>
          {content.topics.map((topic, index) => (
            <Grid component="li" key={topic} size={{ xs: 12, md: 6 }}>
              <Reveal index={index}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2.5rem minmax(0, 1fr)",
                    gap: 1.5,
                    py: { xs: 2.25, md: 2.75 },
                    borderBottom: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography variant="caption" color="text.secondary" dir="ltr" sx={{ pt: 0.25, fontWeight: 800 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h6">{topic}</Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </SiteContainer>
    </SiteSection>
  );
}

export function BookingSteps({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];

  return (
    <SiteSection bordered>
      <SiteContainer>
        <SectionHeading eyebrow={content.stepsEyebrow} title={content.stepsTitle} />
        <Grid component="ol" container sx={{ m: 0, p: 0, listStyle: "none", borderTop: "1px solid", borderColor: "divider" }}>
          {content.steps.map(([title, description], index) => (
            <Grid component="li" key={title} size={{ xs: 12, md: 3 }}>
              <Reveal index={index}>
                <Box
                  sx={{
                    minHeight: { md: 250 },
                    py: { xs: 3, md: 3.5 },
                    px: { xs: 0, md: 2.5 },
                    borderBottom: "1px solid",
                    borderInlineStart: { md: index === 0 ? 0 : "1px solid" },
                    borderColor: "divider",
                  }}
                >
                  <Typography dir="ltr" sx={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1, fontWeight: 750, color: "primary.main" }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h5" component="h3" sx={{ mt: 2.5 }}>
                    {title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {description}
                  </Typography>
                </Box>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </SiteContainer>
    </SiteSection>
  );
}

export function ConsultationBooking({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];

  return (
    <SiteSection id="booking-calendar" bordered>
      <SiteContainer>
        <SectionHeading
          eyebrow={content.bookingEyebrow}
          title={content.bookingTitle}
          description={content.bookingDescription}
        />
        <Typography color="text.secondary" sx={{ maxWidth: 650, mt: { xs: -2.5, md: -4 }, mb: { xs: 3, md: 4 } }}>
          {content.availabilityNote}
        </Typography>
        <AnalyticsView eventName="booking_calendar_view" location="consultation">
          <BookingCalendar bookingUrl={siteConfig.consultation.bookingUrl} title={content.calendarTitle} />
        </AnalyticsView>
      </SiteContainer>
    </SiteSection>
  );
}

export function ConsultationFAQ({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];

  return (
    <SiteSection bordered>
      <SiteContainer>
        <SectionHeading eyebrow={content.faqEyebrow} title={content.faqTitle} />
        <Box sx={{ maxWidth: 960, borderTop: "1px solid", borderColor: "divider" }}>
          {content.faq.map(([question, answer]) => (
            <Accordion
              key={question}
              disableGutters
              elevation={0}
              square
              sx={{
                bgcolor: "transparent",
                backgroundImage: "none",
                borderBottom: "1px solid",
                borderColor: "divider",
                "&::before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ minHeight: 64, px: 0, "& .MuiAccordionSummary-content": { my: 2 } }}>
                <Typography variant="h6" component="h3">
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pt: 0, pb: 3 }}>
                <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </SiteContainer>
    </SiteSection>
  );
}

export function ConsultationCTA({ locale }: { locale: Locale }) {
  const content = consultationContent[locale];

  return (
    <SiteSection bordered>
      <SiteContainer>
        <Box sx={{ maxWidth: 900 }}>
          <Typography color="text.secondary" sx={{ fontWeight: 800, mb: 1.25 }}>
            {content.finalEyebrow}
          </Typography>
          <Typography variant="h2" component="h2">
            {content.finalTitle}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, maxWidth: 700 }}>
            {content.finalDescription}
          </Typography>
          <Button
            href="#booking-calendar"
            variant="contained"
            size="large"
            data-analytics-event="book_consultation_click"
            data-analytics-location="consultation"
            data-analytics-label={content.chooseTime}
            data-analytics-destination="booking_calendar"
            sx={{ mt: 3.5, width: { xs: "100%", sm: "auto" } }}
          >
            {content.chooseTime}
          </Button>
        </Box>
      </SiteContainer>
    </SiteSection>
  );
}
