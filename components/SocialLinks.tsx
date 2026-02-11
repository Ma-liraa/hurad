"use client";

import SocialLinksProps from "@/type/SocialLinksProps";
import React, { useRef } from "react";

interface AnimatedIconHandle {
  startAnimation?: () => void;
  stopAnimation?: () => void;
}

export default function SocialLinks({
  color,
  name,
  url,
  icon,
}: SocialLinksProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  const handleMouseEnter = () => {
    if (
      iconRef.current &&
      typeof iconRef.current.startAnimation === "function"
    ) {
      iconRef.current.startAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (
      iconRef.current &&
      typeof iconRef.current.stopAnimation === "function"
    ) {
      iconRef.current.stopAnimation();
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative col-span-3 flex items-center justify-center gap-x-2 rounded-xl border px-4 py-2.5 transition-all duration-300 ease-in-out hover:scale-105 md:col-span-1"
      style={{
        backgroundColor: `${color}0D`,
        borderColor: `${color}33`,
      }}
      onMouseEnter={(e) => {
        handleMouseEnter();

        e.currentTarget.style.borderColor = `${color}80`;
        e.currentTarget.style.backgroundColor = `${color}1A`;
        e.currentTarget.style.boxShadow = `0 0 15px ${color}30`;
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        e.currentTarget.style.borderColor = `${color}33`;
        e.currentTarget.style.backgroundColor = `${color}0D`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span
        style={{ color: color }}
        className="flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
      >
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any>, {
              ref: iconRef,
            })
          : icon}
      </span>

      <span className="text-sm font-semibold text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
        {name}
      </span>

      <div
        className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: `${color}1A` }}
      ></div>
    </a>
  );
}
