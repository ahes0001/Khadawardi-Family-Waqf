/**
 * Eight-Pointed Star (نجمة ثمانية) SVG Pattern Component
 * 
 * This component creates a traditional Islamic geometric pattern using
 * the eight-pointed star motif, commonly found in Hijazi architecture.
 * Used for decorative dividers, backgrounds, and loading states.
 */

import React from "react";

interface EightPointedStarProps {
  /** Size of the star in pixels */
  size?: number;
  /** Color of the star stroke */
  color?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Fill color (optional, typically transparent for outlines) */
  fill?: string;
  /** Opacity of the star */
  opacity?: number;
  /** Additional CSS classes */
  className?: string;
}

export function EightPointedStar({
  size = 64,
  color = "#1F4A47",
  strokeWidth = 1,
  fill = "none",
  opacity = 1,
  className = "",
}: EightPointedStarProps) {
  const center = size / 2;
  const outerRadius = (size / 2) * 0.9;
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
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <polygon
        points={points.join(" ")}
        fill={fill}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Repeating star pattern for use as background or divider
 */
interface StarPatternProps {
  /** Number of stars to render horizontally */
  count?: number;
  /** Size of each star */
  starSize?: number;
  /** Gap between stars */
  gap?: number;
  /** Color of stars */
  color?: string;
  /** Opacity of the pattern */
  opacity?: number;
  className?: string;
}

export function StarPattern({
  count = 5,
  starSize = 32,
  gap = 16,
  color = "#1F4A47",
  opacity = 0.08,
  className = "",
}: StarPatternProps) {
  const totalWidth = count * starSize + (count - 1) * gap;

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ gap }}
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <EightPointedStar
          key={i}
          size={starSize}
          color={color}
          opacity={opacity}
          strokeWidth={0.8}
        />
      ))}
    </div>
  );
}

/**
 * Section divider with star pattern
 */
export function StarDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className="h-px bg-[#E8E3D7] flex-1" />
      <div className="mx-4">
        <EightPointedStar size={24} color="#D4B896" opacity={0.5} strokeWidth={1.5} />
      </div>
      <div className="h-px bg-[#E8E3D7] flex-1" />
    </div>
  );
}

/**
 * Corner decoration with star motif
 */
export function CornerStar({
  position = "top-right",
  size = 48,
  className = "",
}: {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  className?: string;
}) {
  const positionClasses = {
    "top-left": "top-0 start-0",
    "top-right": "top-0 end-0",
    "bottom-left": "bottom-0 start-0",
    "bottom-right": "bottom-0 end-0",
  };

  const rotationMap = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-left": "-rotate-90",
    "bottom-right": "rotate-180",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${className}`}
      style={{ opacity: 0.15 }}
    >
      <EightPointedStar
        size={size}
        color="#1F4A47"
        className={rotationMap[position]}
        strokeWidth={1}
      />
    </div>
  );
}