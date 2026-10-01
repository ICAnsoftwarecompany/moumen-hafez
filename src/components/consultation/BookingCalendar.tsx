import { Box } from "@mui/material";

type BookingCalendarProps = {
  bookingUrl: string;
  title: string;
  desktopHeight?: number;
  tabletHeight?: number;
  mobileHeight?: number;
  className?: string;
};

export function BookingCalendar({
  bookingUrl,
  title,
  desktopHeight = 620,
  tabletHeight = 680,
  mobileHeight = 770,
  className,
}: BookingCalendarProps) {
  return (
    <Box
      className={className}
      sx={{
        width: "100%",
        maxWidth: 980,
        mx: "auto",
        minWidth: 0,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "18px",
        bgcolor: "#fff",
      }}
    >
      <Box
        component="iframe"
        src={bookingUrl}
        title={title}
        loading="lazy"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        sx={{
          display: "block",
          width: "100%",
          height: mobileHeight,
          border: 0,
          colorScheme: "light",
          direction: "ltr",
          "@media (max-width: 374.98px)": { height: mobileHeight + 40 },
          "@media (min-width: 375px) and (max-width: 389.98px)": { height: mobileHeight + 20 },
          "@media (min-width: 430px) and (max-width: 599.98px)": { height: mobileHeight - 20 },
          "@media (min-width: 600px) and (max-width: 1199.98px)": { height: tabletHeight },
          "@media (min-width: 1200px)": { height: desktopHeight },
        }}
      />
    </Box>
  );
}
