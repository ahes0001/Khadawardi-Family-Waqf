/**
 * Server-safe Card Component
 * 
 * Card without framer-motion animations for use in server components.
 */

import React from "react";

interface CardServerProps {
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
}

export function CardServer({
  children,
  header,
  footer,
  decorative = false,
  gated = false,
  className = "",
}: CardServerProps) {
  const baseStyles =
    "bg-white rounded-xl shadow-sm border border-[#E8E3D7] overflow-hidden";

  const gatedStyles = gated
    ? "border-s-[3px] border-s-[#A85A3E] bg-gradient-to-r from-[#A85A3E]/[0.03] to-transparent"
    : "";

  return (
    <div className={`relative ${baseStyles} ${gatedStyles} ${className}`}>
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
    </div>
  );
}