"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export function XWrappedCard() {
  const [showWrapped, setShowWrapped] = useState(false);
  return (
    <>
      <div className="flex w-lg justify-end">
        <button
          onClick={() => setShowWrapped((prev) => !prev)}
          className="relative cursor-pointer overflow-hidden border border-dashed border-neutral-500 px-3 py-2 text-neutral-300 transition-all duration-300 hover:bg-neutral-500/20 hover:text-neutral-100 active:-translate-y-0.5 active:scale-95"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={showWrapped ? "close" : "open"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              {showWrapped ? "Close" : "Open"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {showWrapped && (
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
              filter: "blur(10px)",
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="flex w-lg flex-col border border-dashed border-neutral-500"
          >
            <div className="flex h-28 w-full border-b border-dashed border-neutral-500">
              <Image src={"/pfp.png"} alt="pfp" height={110} width={110} />
              <div className="flex flex-1 justify-between p-5">
                <div className="flex flex-col">
                  <span className="flex items-center gap-0.5">
                    <p className="text-2xl leading-6 font-bold tracking-wide">
                      shivam
                    </p>
                    <BadgeCheck className="size-5 fill-blue-500 stroke-black" />
                  </span>
                  <p className="font-semibold text-neutral-500">@10xshivam</p>
                  <p className="mt-1 text-lg text-neutral-200">
                    21 y/o Developer |{" "}
                    <span className="text-blue-500">#100xdev</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-neutral-400">
                    <span className="font-semibold text-neutral-100">405</span>{" "}
                    Following
                  </p>
                  <p className="text-neutral-400">
                    <span className="font-semibold text-neutral-100">1035</span>{" "}
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-5">
              <div className="h-full w-full border border-dashed border-neutral-500 bg-neutral-500/15 transition-colors duration-200 hover:border-none hover:bg-transparent">
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
                    stiffness: 50,
                    damping: 10,
                  }}
                  className="flex flex-col items-center gap-5 border border-dashed border-blue-500/50 bg-blue-500/5 px-4 py-5"
                >
                  <h2 className="text-center text-3xl font-semibold text-blue-500">
                    2025 Wrapped
                  </h2>
                  <div className="flex gap-4">
                    <div className="flex min-w-32 flex-col border border-dashed border-blue-500/50 bg-blue-500/10 p-3">
                      Impressions{" "}
                      <span className="text-2xl font-semibold text-blue-500">
                        648.5K
                      </span>
                    </div>
                    <div className="flex min-w-32 flex-col border border-dashed border-blue-500/50 bg-blue-500/10 p-3">
                      Likes{" "}
                      <span className="text-2xl font-semibold text-blue-500">
                        12.3K
                      </span>
                    </div>
                    <div className="flex min-w-32 flex-col border border-dashed border-blue-500/50 bg-blue-500/10 p-3">
                      Profile visits{" "}
                      <span className="text-2xl font-semibold text-blue-500">
                        11.2K
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
