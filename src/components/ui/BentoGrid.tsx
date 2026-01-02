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
    variant?: "white" | "dark" | "blue";
}

const variants = {
    white: "bg-white text-[#040813] border border-[#040813]/10",
    dark: "bg-[#040813] text-white",
    blue: "bg-[#7E9CFC] text-white",
};

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
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
    variant = "white",
}: BentoItemProps) {
    const colSpanClass = colSpan === 2 ? "md:col-span-2" : "col-span-1";
    const rowSpanClass = rowSpan === 2 ? "md:row-span-2" : "row-span-1";

    return (
        <ScrollReveal delay={delay}>
            <div
                className={`
                    rounded-lg p-6 h-full
                    ${variants[variant]}
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
