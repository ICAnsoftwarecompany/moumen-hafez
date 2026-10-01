"use client";

import { ReactNode, useEffect } from "react";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Locale } from "@/types/site";

export function PageShell({ children, locale }: { children: ReactNode; locale: Locale }) {
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;

  useEffect(() => {
    document.body.classList.toggle("home-scroll-snap", isHome);

    return () => {
      document.body.classList.remove("home-scroll-snap");
    };
  }, [isHome, locale]);

  return (
    <Box
      sx={{
        minHeight: "100svh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Header locale={locale} />
      <Box component="main">{children}</Box>
      <Footer locale={locale} />
    </Box>
  );
}
