"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glass?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}

const paddingSizes = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export default function Card({
    children,
    className = "",
    hover = true,
    glass = false,
    padding = "md",
}: CardProps) {
    return (
        <motion.div
            className={`
        rounded-2xl
        ${glass
                    ? "bg-white/70 backdrop-blur-xl border border-white/30"
                    : "bg-white"
                }
        shadow-[0_4px_20px_rgba(59,40,204,0.08)]
        ${paddingSizes[padding]}
        ${className}
      `}
            whileHover={hover ? { y: -4, boxShadow: "0 8px 40px rgba(59,40,204,0.12)" } : {}}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}
