"use client";

import {
  IconHelpFilled,
  IconMenuDeep,
  IconSettingsFilled,
  IconUserFilled,
  IconX,
  TablerIcon,
} from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

interface MenuItem {
  icon: TablerIcon;
  title: string;
  description: string;
}

const menuItems: MenuItem[] = [
  {
    icon: IconSettingsFilled,
    title: "Settings",
    description: "Adjust your preferences",
  },
  {
    icon: IconUserFilled,
    title: "Profile",
    description: "View your profile details",
  },
  {
    icon: IconHelpFilled,
    title: "Help",
    description: "Get assistance and support",
  },
];

export function ActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const buttonIconVariant = {
    initial: {
      rotate: -90,
      scale: 0.88,
      filter: "blur(6px)",
    },
    animate: {
      rotate: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: {
      rotate: 90,
      scale: 0.88,
      filter: "blur(6px)",
    },
  } satisfies Variants;

  const menuVariant = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  } satisfies Variants;

  const itemVariant = {
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    closed: {
      opacity: 0,
      y: -10,
      filter: "blur(6px)",
    },
  } satisfies Variants;

  return (
    <div className="flex h-70 w-sm flex-col items-start justify-start gap-3">
      <button
        type="button"
        className="flex size-12 items-center justify-center rounded-full bg-neutral-900 p-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOpen ? "close" : "menu"}
            className="flex items-center justify-center"
            variants={buttonIconVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.1,
              ease: "easeInOut",
            }}
          >
            {isOpen ? <IconX /> : <IconMenuDeep />}
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="flex w-sm flex-col gap-2.5 rounded-2xl bg-neutral-900 p-4"
            variants={menuVariant}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex cursor-default items-start gap-3 rounded-xl bg-neutral-800 p-2 hover:bg-neutral-700/45 transition-colors duration-300"
                variants={itemVariant}
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-neutral-700 text-neutral-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm leading-0 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
