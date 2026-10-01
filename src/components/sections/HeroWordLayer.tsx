import { Stack, Typography } from "@mui/material";

export function HeroWordLayer({
  lines,
  showPortrait,
  sx,
}: {
  lines: string[];
  showPortrait: boolean;
  sx?: Record<string, unknown>;
}) {
  return (
    <Stack
      aria-hidden
      spacing={0}
      sx={{
        position: "absolute",
        insetInlineStart: showPortrait ? { xs: -8, md: "22%" } : 0,
        insetInlineEnd: showPortrait ? { xs: -8, md: -160 } : 0,
        top: showPortrait ? { xs: 34, md: 18 } : { xs: 28, md: 24 },
        color: "rgba(244,241,234,0.12)",
        pointerEvents: "none",
        userSelect: "none",
        transformStyle: "preserve-3d",
        textShadow: "0 0 34px rgba(255,255,255,0.045)",
        ...sx,
      }}
    >
      {lines.map((line) => (
        <Typography
          key={line}
          sx={{
            fontFamily: "var(--font-inter), var(--font-cairo), Arial, sans-serif",
            fontSize: showPortrait
              ? { xs: "21vw", sm: "18vw", md: "13.6vw", lg: "12.8vw", xl: "11.5rem" }
              : { xs: "18vw", sm: "16vw", md: "13vw" },
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: 0,
            whiteSpace: "nowrap",
            textTransform: "uppercase",
          }}
        >
          {line}
        </Typography>
      ))}
    </Stack>
  );
}
