import { Button, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";

export default function NotFound() {
  return (
    <SiteSection>
      <SiteContainer>
        <Stack spacing={2} sx={{ alignItems: "flex-start", maxWidth: 720, mx: "auto", width: "100%" }}>
          <Typography variant="h2">404</Typography>
          <Typography color="text.secondary">Page not found.</Typography>
          <Button href="/ar" variant="contained">
            Go Home
          </Button>
        </Stack>
      </SiteContainer>
    </SiteSection>
  );
}
