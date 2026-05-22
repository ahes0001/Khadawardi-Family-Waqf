/**
 * Badge Component
 * 
 * Small label for categorization and status indication.
 */

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  /** Badge color variant */
  variant?: "primary" | "secondary" | "terracotta" | "outline";
  /** Badge size */
  size?: "sm" | "md";
  /** Additional CSS classes */
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    primary:
      "bg-[#1F4A47] text-white",
    secondary:
      "bg-[#D4B896] text-[#1A1A1A]",
    terracotta:
      "bg-[#A85A3E] text-white",
    outline:
      "border border-[#1F4A47] text-[#1F4A47] bg-transparent",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
  };

  return (
    <span
      className={`
        inline-flex items-center font-medium rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}