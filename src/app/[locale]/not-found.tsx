import { Button, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SiteSection } from "@/components/layout/SiteSection";

export default function LocaleNotFound() {
  return (
    <SiteSection>
      <SiteContainer>
        <Stack spacing={2} sx={{ alignItems: "flex-start", maxWidth: 720, mx: "auto", width: "100%" }}>
          <Typography variant="h2">404</Typography>
          <Typography color="text.secondary">هذه الصفحة غير موجودة. / This page does not exist.</Typography>
          <Button href="/ar" variant="contained">
            الرئيسية
          </Button>
        </Stack>
      </SiteContainer>
    </SiteSection>
  );
}
