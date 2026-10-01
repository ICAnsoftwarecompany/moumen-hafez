"use client";

import { useEffect, useState } from "react";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { Locale } from "@/types/site";

type HomeSection = {
  id: string;
  number: string;
  label: string;
};

export function HomeSectionIndicator({ sections, locale }: { sections: HomeSection[]; locale: Locale }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const updateActiveSection = () => {
      frame = 0;
      const viewportAnchor = window.innerHeight * 0.44;
      const next = elements
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            id: element.id,
            distance: Math.abs(rect.top - viewportAnchor),
          };
        })
        .sort((a, b) => a.distance - b.distance)[0];

      if (next?.id) {
        setActiveId(next.id);
      }
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sections]);

  return (
    <Stack
      component="nav"
      data-section-indicator="true"
      aria-label={locale === "ar" ? "أقسام الصفحة الرئيسية" : "Homepage sections"}
      spacing={1}
      sx={{
        position: "fixed",
        zIndex: 20,
        insetInlineEnd: { md: 18, lg: 26 },
        top: "50%",
        transform: "translateY(-50%)",
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        p: 0.75,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "rgba(5,5,5,0.58)",
        backdropFilter: "blur(16px)",
      }}
    >
      {sections.map((section) => {
        const active = section.id === activeId;

        return (
          <ButtonBase
            key={section.id}
            href={`#${section.id}`}
            aria-label={section.label}
            aria-current={active ? "step" : undefined}
            sx={{
              width: 42,
              height: 36,
              borderRadius: 1.5,
              border: "1px solid",
              borderColor: active ? "rgba(232,221,201,0.32)" : "rgba(255,255,255,0.10)",
              bgcolor: active ? "primary.main" : "rgba(255,255,255,0.04)",
              color: active ? "primary.contrastText" : "text.secondary",
              transition: "all 180ms ease",
              "&:hover": {
                bgcolor: active ? "#F2EAD9" : "rgba(255,255,255,0.10)",
                color: active ? "primary.contrastText" : "text.primary",
              },
            }}
          >
            <Typography variant="caption" dir="ltr" sx={{ fontWeight: 900 }}>
              {section.number}
            </Typography>
          </ButtonBase>
        );
      })}
    </Stack>
  );
}
