import { ReactNode } from "react";
import { Box } from "@mui/material";

export function SiteContainer({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1440,
        mx: "auto",
        px: { xs: 2.5, sm: 3.5, md: 6, lg: 8, xl: 10 },
        minWidth: 0,
      }}
    >
      {children}
    </Box>
  );
}
