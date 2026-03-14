"use client";

import { IconTrashFilled, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

export function DeleteConfirmationButton() {
  const [open, setOpen] = useState(false);
  const sharedTransition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
  } as const;
  return (
    <div className="relative flex h-68 w-sm items-end justify-end">
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {!open ? (
            <motion.button
              layoutId="container"
              style={{borderRadius:100}}
                transition={sharedTransition}
              className="flex size-14 items-center justify-center bg-white/6"
              onClick={() => setOpen(!open)}
            >
              <motion.span
                layoutId="icon"
                transition={sharedTransition}
                className="flex size-6 shrink-0 items-center justify-center leading-none"
              >
                <IconTrashFilled className="size-6 text-red-500" />
              </motion.span>
            </motion.button>
          ) : (
            <motion.div
              layoutId="container"
                transition={sharedTransition}
              style={{borderRadius:28}}
              className="absolute right-10 bottom-10 flex max-w-xs flex-col gap-6 bg-white/6 p-6 text-lg"
            >
              <div className="flex items-start justify-between">
                <motion.p
                initial={{ filter:"blur(10px)"}}
                animate={{ filter: "blur(0px)"}}
                exit={{ filter: "blur(10px)"}}
                transition={sharedTransition}
                 className="max-w-[80%] leading-snug text-neutral-200 text-shadow-neutral-100">
                  Are you sure you want to delete this item?
                </motion.p>
                <button
                  className="flex items-center justify-center rounded-full bg-neutral-700 p-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  <IconX className="size-3.5 text-neutral-200 hover:text-white" />
                </button>
              </div>

              <motion.button className="flex items-center justify-between gap-2 rounded-full bg-red-500/6 px-5 py-3 font-medium text-red-500">
                Delete Item
                <motion.span
                  layoutId="icon"
                  transition={sharedTransition}
                  className="flex size-6 shrink-0 items-center justify-center leading-none"
                >
                  <IconTrashFilled className="size-6 text-red-500" />
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

