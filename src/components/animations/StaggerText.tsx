"use client";

import { motion } from "framer-motion";

interface StaggerTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function StaggerText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  tag = "h1",
}: StaggerTextProps) {
  const Tag = tag;
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay * 4, delayChildren: delay },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate="visible"
        className="inline-flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
