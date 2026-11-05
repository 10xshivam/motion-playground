"use client";

import {
  IconCreditCard,
  IconInfoCircle,
  IconLogout,
  IconMessage,
  IconToggleRight,
  IconUser,
  type TablerIcon,
} from "@tabler/icons-react";
import { AnimatePresence, LayoutGroup, motion, type Variants } from "motion/react";
import { useState } from "react";

type MenuItem = {
  icon: TablerIcon;
  label: string;
  pro?: boolean;
};

const mainItems: MenuItem[] = [
  { icon: IconUser, label: "Profile" },
  { icon: IconMessage, label: "Community" },
  { icon: IconCreditCard, label: "Subscription" },
  { icon: IconToggleRight, label: "Settings" },
];

const footerItems: MenuItem[] = [
  { icon: IconInfoCircle, label: "Help center" },
  { icon: IconLogout, label: "Sign out" },
];

const hoverTransition = {
  type: "spring",
  stiffness: 380,
  damping: 32,
} as const;

function MenuRow({
  item,
  hovered,
  onHover,
}: {
  item: MenuItem;
  hovered: boolean;
  onHover: () => void;
}) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onMouseEnter={onHover}
      className="relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium text-neutral-800 cursor-pointer"
    >
      {hovered && (
        <motion.span
          layoutId="menu-row-hover"
          transition={hoverTransition}
          className="absolute inset-0 rounded-xl bg-neutral-100"
        />
      )}
      <Icon className="relative z-10 size-5 shrink-0 text-neutral-700" stroke={1.75} />
      <span className="relative z-10 tracking-tight">{item.label}</span>
    </button>
  );
}

const menuBoxVariant = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
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

const menuRowVariant = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
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

export function ProfileDropdown({ open }: { open: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuBoxVariant}
          initial="closed"
          animate="open"
          exit="closed"
          onMouseLeave={() => setHovered(null)}
          className="w-64 rounded-2xl bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
        >
          <LayoutGroup>
            <motion.div variants={menuRowVariant} className="flex flex-col">
              {mainItems.map((item) => (
                <motion.div variants={itemVariant} key={item.label}>
                  <MenuRow
                    item={item}
                    hovered={hovered === item.label}
                    onHover={() => setHovered(item.label)}
                  />
                </motion.div>
              ))}
            </motion.div>
            <div className="mx-2 my-1.5 h-px bg-neutral-200" />
            <motion.div variants={menuRowVariant} className="flex flex-col">
              {footerItems.map((item) => (
                <motion.div variants={itemVariant} key={item.label}>
                  <MenuRow
                    item={item}
                    hovered={hovered === item.label}
                    onHover={() => setHovered(item.label)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </LayoutGroup>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
