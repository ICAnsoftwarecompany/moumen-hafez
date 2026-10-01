import { ReactNode } from "react";
import { Box } from "@mui/material";

type SiteSectionProps = {
  children: ReactNode;
  fullScreen?: boolean;
  bordered?: boolean;
  id?: string;
};

export function SiteSection({ children, fullScreen = false, bordered = false, id }: SiteSectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: { xs: 7, sm: 8, md: 11, lg: 13 },
        minHeight: fullScreen ? "100svh" : "auto",
        display: fullScreen ? "flex" : "block",
        alignItems: fullScreen ? "center" : undefined,
        borderTop: bordered ? "1px solid" : undefined,
        borderColor: bordered ? "divider" : undefined,
        minWidth: 0,
        scrollSnapAlign: "start",
        scrollMarginTop: { xs: 72, md: 84 },
      }}
    >
      {children}
    </Box>
  );
}
