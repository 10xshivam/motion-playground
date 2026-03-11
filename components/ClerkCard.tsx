"use client"

import { IconX } from "@tabler/icons-react";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ClerkIcon, ClerkLogoIcon, GreenCheckIcon, RadioWaveIcon } from "./icons";

export function ClerkCard() {
  const [showCard, setShowCard] = useState(true);
  return (
    <AnimatePresence>
        {showCard && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="flex w-100 flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-700/10 p-6"
          >
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl">
                Organization UI Components
              </h2>
              <p className="text-sm leading-snug tracking-tight text-neutral-500">
                Clerk&apos;s UI components add turn-key simplicity to complex
                Organization management tasks.
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center gap-5 p-4">
              <button className="flex items-center gap-1 rounded-lg border border-neutral-800 px-2.5 py-1 text-neutral-400 shadow shadow-neutral-900">
                <ClerkIcon className="size-3.5 drop-shadow-sm drop-shadow-neutral-400" />
                Clerk
                <IconX
                  onClick={() => setShowCard(false)}
                  className="ml-1.5 size-3.5 stroke-neutral-500 hover:stroke-neutral-300"
                />
              </button>
              <div className="relative w-full flex-1">
                <div className="absolute inset-0 rounded-xl border border-dashed border-neutral-700 bg-neutral-800/20" />
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                  className="relative inset-0 flex h-full w-full flex-col rounded-xl bg-neutral-900 ring ring-neutral-800"
                >
                  <div className="flex-1 divide-y divide-neutral-800 rounded-xl bg-black">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-neutral-800">
                        <GreenCheckIcon />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm">Bluth Company</h3>
                        <p className="text-xs text-neutral-500">Mr. Manager</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-neutral-800">
                        <RadioWaveIcon />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm">Dunder Mifflin</h3>
                        <p className="text-xs text-neutral-500">
                          Asst (to the) Regional Manager
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex aspect-square size-10 items-center justify-center rounded-lg border border-neutral-700/50 bg-neutral-800 p-px">
                        <Image
                          alt="Profile Picture"
                          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww"
                          width={36}
                          height={36}
                          className="rounded-md"
                        />
                      </div>
                      <h3 className="text-sm">Personal account</h3>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="flex aspect-square size-10 items-center justify-center">
                        <div className="flex size-6 items-center justify-center rounded-full bg-neutral-800">
                          <PlusIcon className="size-3.5" />
                        </div>
                      </div>
                      <h3 className="text-sm">Create organization</h3>
                    </div>
                  </div>
                  <div className="flex h-10 items-center justify-center gap-1.5 text-xs font-medium text-neutral-500">
                    Secured by <ClerkLogoIcon />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
  )
}
