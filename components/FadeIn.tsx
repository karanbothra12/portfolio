"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  viewport?: boolean; // if true, uses whileInView, else animate immediately
  fullWidth?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  viewport = true,
  fullWidth = false,
}: FadeInProps) {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = { opacity: 1, y: 0, x: 0 };

  const motionProps = viewport
    ? {
        initial,
        whileInView: animate,
        viewport: { once: true },
      }
    : {
        initial,
        animate,
      };

  return (
    <motion.div
      {...motionProps}
      transition={{ duration: 0.5, delay }}
      className={className}
      style={fullWidth ? { width: "100%" } : undefined}
    >
      {children}
    </motion.div>
  );
}

