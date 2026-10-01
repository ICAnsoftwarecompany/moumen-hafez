"use client";

import { useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Drawer, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { siteConfig } from "@/config/site";
import { navigationContent } from "@/content/pages";
import { Locale } from "@/types/site";
import { getLocalizedPath, switchLocalePath } from "@/utils/locale";

const navPaths = [
  ["home", ""],
  ["about", "/about"],
  ["consultation", "/consultation"],
] as const;

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const copy = navigationContent[locale];
  const nextLocale = locale === "ar" ? "en" : "ar";
  const drawerId = `site-menu-${locale}`;
  const brandName = locale === "ar" ? siteConfig.nameAr : siteConfig.nameEn;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        bgcolor: "rgba(11,13,15,0.84)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <SiteContainer>
        <Box
          component="nav"
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
          sx={{
            minHeight: { xs: 64, md: 76 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1, md: 2 },
            minWidth: 0,
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center", minWidth: 0, flexShrink: 1, gap: { xs: 0.75, sm: 1 } }}>
            <Typography
              component={NextLink}
              href={getLocalizedPath(locale)}
              variant="subtitle1"
              sx={{
                color: "text.primary",
                fontWeight: 850,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: { xs: "48vw", sm: "none" },
              }}
            >
              <bdi>{brandName}</bdi>
            </Typography>
            <Tooltip title={open ? copy.close : copy.menu}>
              <IconButton
                color="inherit"
                aria-label={open ? copy.close : copy.menu}
                aria-controls={drawerId}
                aria-expanded={open ? "true" : "false"}
                onClick={() => setOpen((value) => !value)}
                sx={{ width: 44, height: 44, flexShrink: 0 }}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Tooltip>
          </Stack>

          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "flex-end", flexShrink: 0, gap: { xs: 0.75, sm: 1 } }}
          >
            <Button
              component={NextLink}
              href={getLocalizedPath(locale, "/consultation")}
              data-analytics-event="book_consultation_click"
              data-analytics-location="header"
              data-analytics-label={copy.call}
              data-analytics-destination="consultation_page"
              variant="contained"
              size="small"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                minHeight: 44,
                px: { sm: 1.6, md: 2.2 },
                whiteSpace: "nowrap",
              }}
            >
              {copy.call}
            </Button>
            <Button
              component={NextLink}
              href={switchLocalePath(pathname, nextLocale)}
              variant="outlined"
              color="inherit"
              size="small"
              sx={{ minHeight: 44, minWidth: 44, px: { xs: 1, sm: 1.4 }, borderColor: "divider", whiteSpace: "nowrap" }}
            >
              {copy.switch}
            </Button>
          </Stack>
        </Box>
      </SiteContainer>

      <Drawer
        anchor={locale === "ar" ? "right" : "left"}
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            id: drawerId,
            dir: locale === "ar" ? "rtl" : "ltr",
            sx: {
              width: "min(100vw, 560px)",
              maxWidth: "100vw",
              maxHeight: "100dvh",
              overflowY: "auto",
              bgcolor: "rgba(11,13,15,0.98)",
              borderInlineEnd: "1px solid",
              borderColor: "divider",
              px: { xs: 2.5, sm: 4 },
              py: { xs: 2.5, sm: 4 },
              paddingTop: "calc(env(safe-area-inset-top) + 24px)",
              paddingBottom: "calc(env(safe-area-inset-bottom) + 24px)",
            },
          },
        }}
      >
        <Stack spacing={{ xs: 4, md: 6 }} sx={{ minHeight: "100%", minWidth: 0 }}>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Typography sx={{ fontWeight: 850 }}>
              <bdi>{brandName}</bdi>
            </Typography>
            <Tooltip title={copy.close}>
              <IconButton aria-label={copy.close} onClick={() => setOpen(false)} sx={{ width: 44, height: 44 }}>
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Stack>

          <Stack spacing={{ xs: 1.5, md: 2.5 }} component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {navPaths.map(([key, path], index) => {
              const href = getLocalizedPath(locale, path);
              const active = pathname === href;

              return (
                <Box key={key} component="li">
                  <Button
                    component={NextLink}
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    color="inherit"
                    sx={{
                      width: "100%",
                      justifyContent: "space-between",
                      gap: 2,
                      minHeight: { xs: 58, md: 70 },
                      px: 0,
                      color: active ? "primary.main" : "text.primary",
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "transparent", color: "primary.main" },
                    }}
                  >
                    <Typography variant="h4" component="span" sx={{ color: "inherit" }}>
                      {copy[key]}
                    </Typography>
                    <Typography variant="body2" component="span" sx={{ color: "text.secondary" }}>
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                  </Button>
                </Box>
              );
            })}
          </Stack>

          <Button
            component={NextLink}
            href={getLocalizedPath(locale, "/consultation")}
            onClick={() => setOpen(false)}
            variant="contained"
            size="large"
            data-analytics-event="book_consultation_click"
            data-analytics-location="header"
            data-analytics-label={copy.call}
            data-analytics-destination="consultation_page"
          >
            {copy.call}
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  );
}
