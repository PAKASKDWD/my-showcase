"use client";

import Link from "next/link";

interface NavCardProps {
  title: string;
  emoji: string;
  description: string;
  color: string;
  href: string;
  tooltipPosition: "left" | "right";
  delay: string;
}

export default function NavCard({
  title,
  emoji,
  description,
  color,
  href,
  tooltipPosition,
  delay,
}: NavCardProps) {
  return (
    <div className={`tooltip-wrapper relative animate-pop-in ${delay}`}>
      <Link
        href={href}
        className="btn-card hover-lift flex items-center gap-3 px-5 py-4 border-3 border-black shadow-brutal text-white text-sm md:text-base"
        style={{ backgroundColor: color }}
      >
        <span className="btn-icon text-lg">{emoji}</span>
        <span>{title}</span>
      </Link>
      <div className={`game-tooltip tooltip-${tooltipPosition}`}>
        <div style={{ color: "#FFD700", fontSize: "14px", marginBottom: "6px", textShadow: "1px 1px 0px #000" }}>
          {emoji} {title}
        </div>
        <div style={{ color: "#F5DEB3", fontSize: "12px", lineHeight: 1.6, whiteSpace: "normal" }}>
          {description}
        </div>
      </div>
    </div>
  );
}
