"use client";

import { ReactNode, useMemo } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { NextIntlClientProvider } from "next-intl";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { createAppTheme } from "@/theme/theme";
import { Direction } from "@/types/site";

type ClientProvidersProps = {
  children: ReactNode;
  direction: Direction;
  locale: string;
  messages: Record<string, unknown>;
};

export function ClientProviders({
  children,
  direction,
  locale,
  messages,
}: ClientProvidersProps) {
  const theme = useMemo(() => createAppTheme(direction), [direction]);
  const cacheOptions = useMemo(
    () => ({
      enableCssLayer: true,
      key: direction === "rtl" ? "muirtl" : "muiltr",
      stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [prefixer],
    }),
    [direction],
  );

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AppRouterCacheProvider options={cacheOptions}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </NextIntlClientProvider>
  );
}
