"use client";

import {
  IconBellXFilled,
  IconCircleDotFilled,
  IconMessageCircleFilled,
} from "@tabler/icons-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type Status = "available" | "focus" | "do-not-disturb";

const statuses = [
  {
    id: "available",
    label: "Available",
    Icon: IconMessageCircleFilled,
    className: "bg-green-600",
    expandedClassName: "border-green-700 inset-shadow-green-500",
  },
  {
    id: "focus",
    label: "Focus mode",
    Icon: IconCircleDotFilled,
    className: "bg-yellow-500",
    expandedClassName: "border-yellow-600 inset-shadow-yellow-400",
  },
  {
    id: "do-not-disturb",
    label: "Do not disturb",
    Icon: IconBellXFilled,
    className: "bg-orange-600",
    expandedClassName: "border-orange-700 inset-shadow-orange-500",
  },
] as const;

export default function StatusPicker() {
  const [selectedStatus, setSelectedStatus] = useState<Status>("available");
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredStatus, setHoveredStatus] = useState<Status | null>(null);
  const reduceMotion = useReducedMotion();
  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 460, damping: 28, mass: 0.7 };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-200">
      <div className="relative w-fit rounded-full">
        <Image
          src="/pfp1.png"
          alt="Status"
          width={100}
          height={100}
          className="relative rounded-full"
        />
        <motion.div
          initial={false}
          animate={{ width: isExpanded ? 112 : 28, height: isExpanded ? 40 : 28 }}
          transition={spring}
          className="absolute top-0 left-[calc(100%-2rem)] border border-neutral-500/40 text-white inset-shadow-xs inset-shadow-neutral-100 flex  items-center justify-center"
          style={{ borderRadius: 999 }}
          onMouseLeave={() => setHoveredStatus(null)}
        >
          {statuses.map(({ id, label, Icon, className, expandedClassName }, index) => {
            const isSelected = selectedStatus === id;
            const isVisible = isExpanded || isSelected;

            return (
              <motion.button
                key={id}
                type="button"
                initial={false}
                animate={{
                  x: isExpanded ? index * 36 : 0,
                  width: isExpanded ? 30 : 18,
                  height: isExpanded ? 30 : 18,
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.4,
                  filter: !reduceMotion && !isVisible ? "blur(6px)" : "blur(0px)",
                }}
                transition={spring}
                whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                aria-label={isExpanded ? label : `${label}. Change status`}
                aria-pressed={isSelected}
                aria-expanded={isExpanded}
                aria-hidden={!isVisible}
                disabled={!isVisible}
                tabIndex={isVisible ? 0 : -1}
                onHoverStart={() => isExpanded && setHoveredStatus(id)}
                onFocus={() => isExpanded && setHoveredStatus(id)}
                onBlur={() => setHoveredStatus(null)}
                onClick={() => {
                  setHoveredStatus(null);

                  if (!isExpanded) {
                    setIsExpanded(true);
                    return;
                  }

                  setSelectedStatus(id);
                  setIsExpanded(false);
                }}
                className={`absolute top-1 left-1 flex cursor-pointer items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 disabled:pointer-events-none ${className} ${isExpanded ? `border inset-shadow-2xs ${expandedClassName}` : "border-0 inset-shadow-none"}`}
                style={{ borderRadius: 999, zIndex: isSelected ? 1 : 0 }}
              >
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.span
                      key="icon"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: reduceMotion ? 0 : 0.12 }}
                      className="flex"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
          <AnimatePresence>
            {isExpanded && hoveredStatus && (
              <motion.div
                key={hoveredStatus}
                initial={{ opacity: 0, y: 4, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -3, filter: "blur(4px)" }}
                transition={{ duration: reduceMotion ? 0 : 0.14 }}
                className="pointer-events-none absolute bottom-full mb-2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-xs whitespace-nowrap text-neutral-800"
                style={{
                  left: statuses.findIndex((status) => status.id === hoveredStatus) * 36 + 19,
                }}
              >
                {statuses.find((status) => status.id === hoveredStatus)?.label}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
