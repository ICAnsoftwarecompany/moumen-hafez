import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { Box, Stack, Typography } from "@mui/material";
import NextLink from "next/link";

type BookingCalendarPreviewProps = {
  href: string;
  ariaLabel: string;
  monthLabel: string;
  durationLabel: string;
  meetingLabel: string;
  selectLabel: string;
};

const calendarDays = [
  { day: "21", state: "muted" },
  { day: "22", state: "available" },
  { day: "23", state: "selected" },
  { day: "24", state: "available" },
  { day: "25", state: "muted" },
] as const;

export function BookingCalendarPreview({
  href,
  ariaLabel,
  monthLabel,
  durationLabel,
  meetingLabel,
  selectLabel,
}: BookingCalendarPreviewProps) {
  return (
    <NextLink
      href={href}
      aria-label={ariaLabel}
      data-analytics-event="book_consultation_click"
      data-analytics-location="contact"
      data-analytics-label={selectLabel}
      data-analytics-destination="consultation_page"
      style={{ display: "block", width: "100%", maxWidth: 520 }}
    >
      <Box
        sx={{
          width: "100%",
          color: "inherit",
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          transition: "border-color 180ms ease, transform 180ms ease",
          "a:hover &": { borderColor: "primary.main", transform: "translateY(-2px)" },
          "a:focus-visible &": { outline: "2px solid", outlineColor: "primary.main", outlineOffset: 3 },
        }}
      >
      <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", gap: 2, p: { xs: 2, sm: 2.5 }, borderBottom: "1px solid", borderColor: "divider" }}>
        <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
          <CalendarMonthOutlinedIcon aria-hidden sx={{ color: "primary.main" }} />
          <Typography variant="h6">{monthLabel}</Typography>
        </Stack>
        <Typography variant="caption" color="text.secondary">
          {durationLabel}
        </Typography>
      </Stack>

      <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: { xs: 0.75, sm: 1 } }}>
          {calendarDays.map(({ day, state }) => (
            <Box
              key={day}
              aria-hidden
              sx={{
                aspectRatio: "1 / 1",
                display: "grid",
                placeItems: "center",
                border: "1px solid",
                borderColor: state === "selected" ? "primary.main" : "divider",
                bgcolor: state === "selected" ? "primary.main" : "transparent",
                color: state === "selected" ? "primary.contrastText" : state === "muted" ? "text.disabled" : "text.primary",
                fontWeight: 800,
                fontSize: { xs: "0.82rem", sm: "0.9rem" },
              }}
            >
              {day}
            </Box>
          ))}
        </Box>

        <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between", gap: 2, mt: 2.5 }}>
          <Stack direction="row" sx={{ alignItems: "center", gap: 1, minWidth: 0 }}>
            <VideoCallOutlinedIcon aria-hidden sx={{ color: "text.secondary", fontSize: 21 }} />
            <Typography color="text.secondary" variant="body2">
              {meetingLabel}
            </Typography>
          </Stack>
          <Typography sx={{ color: "primary.main", fontWeight: 800, whiteSpace: "nowrap" }}>{selectLabel}</Typography>
        </Stack>
      </Box>
      </Box>
    </NextLink>
  );
}
