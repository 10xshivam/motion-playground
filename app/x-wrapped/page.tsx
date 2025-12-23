"use client";

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [showWrapped, setShowWrapped] = useState(false);

  return (
    <div className="flex min-h-screen items-center bg-zinc-50 dark:bg-black flex-col gap-7 pt-40">
      <div className="w-lg flex justify-end">
        <button
          onClick={() => setShowWrapped((prev) => !prev)}
          className="border px-3 py-2 border-dashed text-neutral-300 hover:text-neutral-100 border-neutral-500 hover:bg-neutral-500/20 transition-all duration-300 active:-translate-y-0.5 active:scale-95 relative overflow-hidden"
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
            className="border border-dashed w-lg border-neutral-500 flex flex-col"
          >
            <div className="w-full border-b border-dashed border-neutral-500 h-28 flex">
              <Image src={"/pfp.png"} alt="pfp" height={110} width={110} />
              <div className="flex-1 p-5 flex justify-between">
                <div className="flex flex-col">
                  <span className="flex gap-0.5 items-center">
                    <p className="text-2xl font-bold tracking-wide leading-6">
                      shivam
                    </p>
                    <BadgeCheck className="size-5 fill-blue-500 stroke-black" />
                  </span>
                  <p className="text-neutral-500 font-semibold">@10xshivam</p>
                  <p className="text-lg mt-1 text-neutral-200">
                    21 y/o Developer |{" "}
                    <span className="text-blue-500">#100xdev</span>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-neutral-400">
                    <span className="text-neutral-100 font-semibold">405</span>{" "}
                    Following
                  </p>
                  <p className="text-neutral-400">
                    <span className="text-neutral-100 font-semibold">1035</span>{" "}
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-5">
              <div className="w-full h-full border border-dashed border-neutral-500 bg-neutral-500/15 transition-colors duration-200 hover:border-none hover:bg-transparent">
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
                  className=" border border-dashed border-blue-500/50 bg-blue-500/5 px-4 py-5 flex flex-col items-center gap-5"
                >
                  <h2 className="text-center text-3xl text-blue-500 font-semibold">
                    2025 Wrapped
                  </h2>
                  <div className="flex gap-4">
                    <div className="border p-3 flex flex-col min-w-32 border-dashed border-blue-500/50 bg-blue-500/10">
                      Impressions{" "}
                      <span className="text-2xl text-blue-500 font-semibold">
                        648.5K
                      </span>
                    </div>
                    <div className="border p-3 flex flex-col min-w-32 border-dashed border-blue-500/50 bg-blue-500/10">
                      Likes{" "}
                      <span className="text-2xl text-blue-500 font-semibold">
                        12.3K
                      </span>
                    </div>
                    <div className="border p-3 flex flex-col min-w-32 border-dashed border-blue-500/50 bg-blue-500/10">
                      Profile visits{" "}
                      <span className="text-2xl text-blue-500 font-semibold">
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
    </div>
  );
}
