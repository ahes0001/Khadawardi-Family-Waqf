/**
 * Tessellation Pattern Component
 * 
 * Creates subtle geometric tessellation patterns for backgrounds.
 * Based on Islamic geometric principles using repeating polygon shapes.
 */

import React, { useId } from "react";

interface TessellationProps {
  /** Pattern variant - hex, square, or star */
  variant?: "hex" | "square" | "star";
  /** Base color of the pattern */
  color?: string;
  /** Opacity of the pattern */
  opacity?: number;
  /** Size of each pattern unit in pixels */
  size?: number;
  /** CSS class for container */
  className?: string;
}

export function Tessellation({
  variant = "hex",
  color = "#1F4A47",
  opacity = 0.04,
  size = 60,
  className = "",
}: TessellationProps) {
  // Use React's useId for stable unique IDs
  const uniqueId = useId();
  const patternId = `tessellation-${variant}-${uniqueId}`;

  const renderPattern = () => {
    switch (variant) {
      case "hex":
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={size * 2}
            height={size * Math.sqrt(3)}
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points={`${size},0 ${size * 2},${size * Math.sqrt(3) / 2} ${size},${size * Math.sqrt(3)} 0,${size * Math.sqrt(3) / 2}`}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </pattern>
        );
      case "square":
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0.5"
              y="0.5"
              width={size - 1}
              height={size - 1}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </pattern>
        );
      case "star":
        // Generate 8-pointed star pattern
        const center = size / 2;
        const outerRadius = (size / 2) * 0.4;
        const innerRadius = outerRadius * 0.4;
        const points: string[] = [];
        for (let i = 0; i < 16; i++) {
          const angle = (i * Math.PI) / 8 - Math.PI / 2;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          points.push(`${x},${y}`);
        }
        return (
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points={points.join(" ")}
              fill="none"
              stroke={color}
              strokeWidth="0.5"
            />
          </pattern>
        );
    }
  };

  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity }}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>{renderPattern()}</defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}

/**
 * Loading spinner with star pattern
 */
interface LoadingSpinnerProps {
  /** Size of the spinner */
  size?: number;
  /** Color of the spinner */
  color?: string;
  /** Additional CSS classes */
  className?: string;
}

export function LoadingSpinner({
  size = 48,
  color = "#1F4A47",
  className = "",
}: LoadingSpinnerProps) {
  const center = size / 2;
  const outerRadius = (size / 2) * 0.8;
  const innerRadius = outerRadius * 0.4;

  // Generate points for eight-pointed star
  const points: string[] = [];
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI) / 8 - Math.PI / 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <div className={`inline-block ${className}`} role="status" aria-label="Loading">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="animate-spin"
        style={{ animationDuration: "2s" }}
      >
        <polygon
          points={points.join(" ")}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Decorative background pattern for sections
 */
export function SectionBackground({
  children,
  variant = "star",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "hex" | "square" | "star";
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Tessellation variant={variant} className="pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}