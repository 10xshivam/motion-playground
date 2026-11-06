"use client";

import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const links = ["Work", "Studio", "Journal", "About"];

const spring = {
  type: "spring",
  stiffness: 420,
  damping: 34,
} as const;

function BrandMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-[22px]"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.6 21.2 6.9v10.2L12 22.4 2.8 17.1V6.9L12 1.6Zm0 3.15L6.15 8.15v7.7L12 19.25l5.85-3.4v-7.7L12 4.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function GlassNavbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-1 rounded-full p-1.5 text-neutral-900 inset-shadow-sm inset-shadow-neutral-200 border border-neutral-500/40">
      <div className="flex items-center gap-1 pr-3 pl-2">
        <BrandMark />
        <span className="text-[15px] font-medium tracking-tight">Northline</span>
      </div>

      <span className="h-4 w-px bg-black/15" />

      <LayoutGroup>
        <ul
          className="flex items-center px-1"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((label) => (
            <li key={label} onMouseEnter={() => setHovered(label)}>
              <button
                type="button"
                className="relative cursor-pointer px-3 py-1 text-sm text-neutral-800"
              >
                {hovered === label && (
                  <motion.span
                    layoutId="nav-hover"
                    transition={spring}
                    className="absolute inset-0 rounded-full bg-neutral-500/10"
                  />
                )}
                <span className="relative tracking-tight">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </LayoutGroup>

      <button
        type="button"
        className="ml-6 cursor-pointer rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white tracking-tight"
      >
        Get Started
      </button>
    </nav>
  );
}
