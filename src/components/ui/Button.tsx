"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
}

const variants = {
    primary: "bg-[#7E9CFC] text-white hover:opacity-90",
    secondary: "bg-[#040813] text-white hover:opacity-90",
    outline: "border-2 border-[#040813] text-[#040813] hover:bg-[#040813] hover:text-white",
};

const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    fullWidth = false,
    className = "cursor-pointer",
    ...props
}: ButtonProps) {
    return (
        <motion.button
            className={`
        inline-flex items-center justify-center gap-2 font-medium rounded-md
        transition-opacity duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {icon && iconPosition === "left" && icon}
            {children}
            {icon && iconPosition === "right" && icon}
        </motion.button>
    );
}
