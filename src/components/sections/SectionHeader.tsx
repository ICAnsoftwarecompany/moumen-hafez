import { Box, Typography } from "@mui/material";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center" | "end";
};

export function SectionHeader({ eyebrow, title, description, align = "start" }: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <Box sx={{ mb: { xs: 2.5, md: 4 }, textAlign: align }}>
      {eyebrow ? (
        <Typography color="primary.main" variant="overline" sx={{ fontWeight: 800, letterSpacing: 0 }}>
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h3" component="h2" sx={{ maxWidth: 820, mx: centered ? "auto" : 0 }}>
        {title}
      </Typography>
      {description ? (
        <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 720, mx: centered ? "auto" : 0 }}>
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
