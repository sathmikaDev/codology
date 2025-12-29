"use client";

import { ReactNode } from "react";
import ScrollReveal from "../animations/ScrollReveal";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    colSpan?: 1 | 2;
    rowSpan?: 1 | 2;
    delay?: number;
    accent?: "lavender" | "mint" | "buttercream" | "none";
}

const accentColors = {
    lavender: "bg-[#E0D9FF]/30",
    mint: "bg-[#D6F5F0]/30",
    buttercream: "bg-[#FFF4D6]/30",
    none: "bg-white",
};

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div
            className={`
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
        ${className}
      `}
        >
            {children}
        </div>
    );
}

export function BentoItem({
    children,
    className = "",
    colSpan = 1,
    rowSpan = 1,
    delay = 0,
    accent = "none",
}: BentoItemProps) {
    const colSpanClass = colSpan === 2 ? "md:col-span-2" : "col-span-1";
    const rowSpanClass = rowSpan === 2 ? "md:row-span-2" : "row-span-1";

    return (
        <ScrollReveal delay={delay}>
            <div
                className={`
          rounded-2xl p-6 h-full
          ${accentColors[accent]}
          border border-[#E0D9FF]/20
          shadow-[0_4px_20px_rgba(59,40,204,0.06)]
          hover:shadow-[0_8px_40px_rgba(59,40,204,0.1)]
          hover:-translate-y-1
          transition-all duration-300
          ${colSpanClass}
          ${rowSpanClass}
          ${className}
        `}
            >
                {children}
            </div>
        </ScrollReveal>
    );
}
