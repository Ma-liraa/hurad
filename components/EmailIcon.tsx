"use client";

import { AtSignIcon } from "@/icons/AtSignIcon";
import React, { useRef } from "react";
interface AnimatedIconHandle {
  startAnimation?: () => void;
  stopAnimation?: () => void;
}
function EmailIcon() {
  const emailIconRef = useRef<AnimatedIconHandle>(null);

  const handleMouseEnter = () => {
    if (
      emailIconRef.current &&
      typeof emailIconRef.current.startAnimation === "function"
    ) {
      emailIconRef.current.startAnimation();
    }
  };
  const handleMouseLeave = () => {
    if (
      emailIconRef.current &&
      typeof emailIconRef.current.stopAnimation === "function"
    ) {
      emailIconRef.current.stopAnimation();
    }
  };
  return (
    <a
      href="mailto:hurad@example.com"
      className="group relative col-span-3 flex w-full items-center justify-center gap-x-3 rounded-xl border px-4 py-3 transition-all duration-300 ease-in-out hover:scale-105"
      style={{
        backgroundColor: "rgba(20, 184, 166, 0.05)",
        borderColor: "rgba(20, 184, 166, 0.2)",
      }}
      onMouseEnter={(e) => {
        handleMouseEnter();
        e.currentTarget.style.borderColor = "rgba(20, 184, 166, 0.5)";
        e.currentTarget.style.backgroundColor = "rgba(20, 184, 166, 0.1)";
        e.currentTarget.style.boxShadow = "0 0 15px rgba(20, 184, 166, 0.2)";
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        e.currentTarget.style.borderColor = "rgba(20, 184, 166, 0.2)";
        e.currentTarget.style.backgroundColor = "rgba(20, 184, 166, 0.05)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <span className="text-teal-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
        {React.isValidElement(<AtSignIcon />) ? (
          React.cloneElement((<AtSignIcon />) as React.ReactElement<any>, {
            ref: emailIconRef,
          })
        ) : (
          <AtSignIcon />
        )}
      </span>

      <span className="text-sm font-semibold text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-100">
        hurad@example.com
      </span>

      <div
        className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-100"
        style={{ backgroundColor: "rgba(20, 184, 166, 0.1)" }}
      ></div>
    </a>
  );
}

export default EmailIcon;
