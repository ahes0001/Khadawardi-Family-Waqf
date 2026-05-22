/**
 * Card Component
 * 
 * Content container with soft shadows and optional decorative elements.
 * Used throughout the site for consistent presentation.
 */

import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  /** Optional header content */
  header?: React.ReactNode;
  /** Optional footer content */
  footer?: React.ReactNode;
  /** Whether to show corner star decoration */
  decorative?: boolean;
  /** Whether this card contains gated content */
  gated?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Animation delay for staggered effects */
  delay?: number;
}

export function Card({
  children,
  header,
  footer,
  decorative = false,
  gated = false,
  className = "",
  onClick,
  delay = 0,
}: CardProps) {
  const baseStyles =
    "bg-white rounded-xl shadow-sm border border-[#E8E3D7] overflow-hidden transition-shadow duration-200";

  const hoverStyles = onClick
    ? "hover:shadow-md cursor-pointer"
    : "";

  const gatedStyles = gated
    ? "border-s-[3px] border-s-[#A85A3E] bg-gradient-to-r from-[#A85A3E]/[0.03] to-transparent"
    : "";

  const cardContent = (
    <>
      {decorative && (
        <div
          className="absolute top-3 end-3 opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <polygon
              points="16,2 20,12 30,16 20,20 16,30 12,20 2,16 12,12"
              fill="none"
              stroke="#1F4A47"
              strokeWidth="1"
            />
          </svg>
        </div>
      )}

      {gated && (
        <span className="gated-badge">
          Family
        </span>
      )}

      {header && (
        <div className="px-6 pt-6 pb-4 border-b border-[#E8E3D7]">
          {header}
        </div>
      )}

      <div className="p-6">{children}</div>

      {footer && (
        <div className="px-6 py-4 bg-[#FAF8F3] border-t border-[#E8E3D7]">
          {footer}
        </div>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative ${baseStyles} ${hoverStyles} ${gatedStyles} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {cardContent}
    </motion.div>
  );
}

/**
 * Simple stat card for quick facts
 */
interface StatCardProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  delay?: number;
}

export function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E3D7] text-center"
    >
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1F4A47]/10 text-[#1F4A47] mb-4">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold text-[#1F4A47] mb-1">{value}</div>
      <div className="text-sm text-[#6B6B68]">{label}</div>
    </motion.div>
  );
}