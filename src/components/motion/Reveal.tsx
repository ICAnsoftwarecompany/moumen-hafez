"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

/**
 * Fade-up-on-scroll wrapper used for repeated section content (cards, list rows).
 * Respects prefers-reduced-motion via useReducedMotion, same as the CSS-level
 * media query already applied globally in globals.css.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.06, 0.3), ease: RISE_EASE }}
    >
      {children}
    </motion.div>
  );
}
