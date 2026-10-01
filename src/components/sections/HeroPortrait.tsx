"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Box } from "@mui/material";
import { HeroWordLayer } from "@/components/sections/HeroWordLayer";
import { Locale } from "@/types/site";

type HeroPortraitProps = {
  locale: Locale;
  nameLines: string[];
  src: string;
  alt: string;
};

export function HeroPortrait({ locale, nameLines, src, alt }: HeroPortraitProps) {
  const isArabic = locale === "ar";
  const wrapperRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number | undefined>(undefined);
  const [canTilt] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!canTilt) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      wrapperRef.current?.style.setProperty("--tilt-x", (x * 2).toFixed(3));
      wrapperRef.current?.style.setProperty("--tilt-y", (y * 2).toFixed(3));
    });
  }

  function resetTilt() {
    if (frame.current) cancelAnimationFrame(frame.current);
    wrapperRef.current?.style.setProperty("--tilt-x", "0");
    wrapperRef.current?.style.setProperty("--tilt-y", "0");
  }

  const baseRotateBack = isArabic ? -10 : 10;
  const baseRotateImage = isArabic ? 7 : -7;
  const baseRotateFront = isArabic ? 8 : -8;
  const tiltSign = isArabic ? -1 : 1;

  return (
    <Box
      ref={wrapperRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      sx={{
        position: "absolute",
        inset: 0,
        "--tilt-x": 0,
        "--tilt-y": 0,
      }}
    >
      {/* Back ghost-word layer, behind the portrait */}
      <HeroWordLayer
        lines={nameLines}
        showPortrait
        sx={{
          zIndex: 1,
          "--word-base-opacity": 0.26,
          opacity: 0,
          color: "rgba(255,255,255,0.15)",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          filter: "drop-shadow(0 18px 36px rgba(255,255,255,0.025))",
          animation: "hero-word-fade 900ms cubic-bezier(0.16,1,0.3,1) both, hero-word-breathe 7s ease-in-out 1.1s infinite",
          transition: "transform 600ms cubic-bezier(0.16,1,0.3,1)",
          transform: {
            xs: "translate3d(0, 0, -80px) rotateX(0deg)",
            md: `translate3d(calc(${isArabic ? "5%" : "-5%"} + var(--tilt-x) * 6px), calc(var(--tilt-y) * 6px), -120px) rotateY(calc(${baseRotateBack}deg + var(--tilt-x) * ${tiltSign * -4}deg))`,
          },
        }}
      />

      {/* Ambient glow seating the portrait into the page */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: 1,
          insetInlineEnd: { xs: "38%", md: -18, lg: 4 },
          top: { xs: 60, md: "42%" },
          width: { xs: 480, sm: 620, md: 760, lg: 860, xl: 920 },
          height: { xs: 480, sm: 620, md: 760, lg: 860, xl: 920 },
          opacity: 0,
          pointerEvents: "none",
          animation: "hero-fade-scale 1.4s cubic-bezier(0.16,1,0.3,1) 150ms both",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            transform: "translate(18%, -32%)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,221,201,0.20) 0%, rgba(232,221,201,0.08) 42%, rgba(232,221,201,0) 70%)",
            filter: "blur(46px)",
          }}
        />
      </Box>

      {/* Portrait image, masked and tilt-interactive. The mask and the position/tilt
          transform must live on the same element: mask gradients are computed against
          the element's own pre-transform box, so splitting them apart misaligns the
          fade with where the transformed image actually renders. The entrance
          scale-in therefore lives on an outer wrapper that carries no transform of
          its own. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: 2,
          insetInlineEnd: { xs: "50%", md: -12, lg: 12 },
          top: { xs: 76, md: "50%" },
          width: { xs: "118vw", sm: 560, md: 680, lg: 760, xl: 820 },
          maxWidth: { xs: 460, sm: 560, md: 680, lg: 760, xl: 820 },
          aspectRatio: "1 / 1.08",
          opacity: 0,
          pointerEvents: "none",
          animation: "hero-fade-scale 1.2s cubic-bezier(0.16,1,0.3,1) 220ms both",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            filter: "drop-shadow(0 42px 58px rgba(0,0,0,0.64))",
            mixBlendMode: "luminosity",
            WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 13%, black 76%, transparent 100%)",
            maskImage: "linear-gradient(180deg, transparent 0%, black 13%, black 76%, transparent 100%)",
            transition: "transform 500ms cubic-bezier(0.16,1,0.3,1)",
            transform: {
              xs: "translateX(50%)",
              md: `translateY(-48%) rotateY(calc(${baseRotateImage}deg + var(--tilt-x) * ${tiltSign * 5}deg)) rotateX(calc(var(--tilt-y) * -3deg)) translateZ(90px)`,
            },
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1200px) 820px, (min-width: 900px) 680px, 118vw"
            style={{ objectFit: "contain", objectPosition: "50% 50%" }}
          />
        </Box>
      </Box>

      {/* Front ghost-word layer, screen-blended over the portrait */}
      <HeroWordLayer
        lines={nameLines}
        showPortrait
        sx={{
          zIndex: 3,
          "--word-base-opacity": 0.24,
          opacity: 0,
          color: "rgba(255,255,255,0.13)",
          mixBlendMode: "screen",
          WebkitTextStroke: "1px rgba(255,255,255,0.10)",
          animation: "hero-word-fade 900ms cubic-bezier(0.16,1,0.3,1) 320ms both, hero-word-breathe 7s ease-in-out 1.4s infinite",
          transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
          transform: {
            xs: "translate3d(0, 8px, 80px)",
            md: `translate3d(calc(${isArabic ? "3%" : "-3%"} + var(--tilt-x) * 10px), calc(8px + var(--tilt-y) * 8px), 110px) rotateY(calc(${baseRotateFront}deg + var(--tilt-x) * ${tiltSign * -6}deg))`,
          },
          maskImage: "linear-gradient(90deg, transparent 0%, black 18%, black 72%, transparent 100%)",
        }}
      />
    </Box>
  );
}
