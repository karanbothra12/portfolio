"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterEffect({
  text,
  className,
  cursorClassName,
}: TypewriterEffectProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      delay: 0.5,
    });
    return controls.stop;
  }, [count, text.length]);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`inline-block h-[1em] w-[2px] align-middle bg-blue-600 dark:bg-blue-400 ml-1 ${cursorClassName}`}
      />
    </span>
  );
}

