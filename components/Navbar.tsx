"use client";

import { LayoutGroup, motion } from "motion/react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Components", href: "/components" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  const sharedTransition = {
    type: "spring",
    stiffness: 380,
    damping: 30,
  } as const;

  return (
    <div className="h-12 flex items-center px-3">
      <LayoutGroup>
        <ul className="flex gap-4" onMouseLeave={() => setHovered(null)}>
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              className="text-lg relative cursor-default px-2 py-0.5 font-heading text-neutral-500 transition-colors duration-300 hover:text-neutral-100"
              onMouseEnter={() => setHovered(item.href)}
            >
              {item.href === hovered && (
                <motion.div
                  layoutId="navbar-hover"
                  transition={sharedTransition}
                  className="absolute inset-0 border border-dashed border-neutral-600 bg-neutral-700/10"
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.li>
          ))}
        </ul>
      </LayoutGroup>
    </div>
  );
}
