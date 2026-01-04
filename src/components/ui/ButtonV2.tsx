"use client";

import { ArrowUpRight, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ButtonV2Props {
  text?: string;
  className?: string;
  variant?: "primary" | "secondary";
  icon?: LucideIcon;
}

const ButtonV2 = ({
  text = "Let's Talk",
  className = "",
  variant = "primary",
  icon: Icon = ArrowUpRight,
}: ButtonV2Props) => {
  const [isHovered, setIsHovered] = useState(false);

  // Secondary variant - simple button without icon
  if (variant === "secondary") {
    return (
      <motion.button
        className={`relative rounded-full bg-transparent text-dark border border-primary cursor-pointer px-6 py-3 transition-colors duration-300 hover:bg-dark hover:text-white ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-sm font-medium">{text}</span>
      </motion.button>
    );
  }

  // Primary variant - purple shrinks to icon on hover, revealing transparent bg
  return (
    <motion.button
      className={`group relative flex items-center gap-3 rounded-full bg-transparent text-dark overflow-hidden cursor-pointer pl-6 pr-1 py-1 border border-primary hover:border-dark ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Purple background circle - starts expanded, shrinks to icon on hover */}
      <motion.span
        className="absolute right-1 w-10 h-10 rounded-full bg-primary"
        animate={{
          scale: isHovered ? 1 : 16,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "center" }}
      />

      {/* Text - always dark */}
      <span className="relative z-10 text-sm font-medium text-dark">
        {text}
      </span>

      {/* Icon container - blends with purple bg initially, stays purple on hover */}
      <span className="relative z-10 w-10 h-10 rounded-full bg-primary overflow-hidden flex items-center justify-center">
        {/* First icon - moves up and right, exits */}
        <motion.span
          className="absolute flex items-center justify-center text-dark"
          animate={{
            y: isHovered ? -32 : 0,
            x: isHovered ? 32 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Icon className="w-5 h-5" />
        </motion.span>

        {/* Second icon - starts bottom-left, enters to center */}
        <motion.span
          className="absolute flex items-center justify-center text-dark"
          animate={{
            y: isHovered ? 0 : 32,
            x: isHovered ? 0 : -32,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Icon className="w-5 h-5" />
        </motion.span>
      </span>
    </motion.button>
  );
};

export default ButtonV2;
