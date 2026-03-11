"use client";

import { IconX } from "@tabler/icons-react";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function ClerkCard() {
  const [showCard, setShowCard] = useState(true);
  return (
    <div className="flex h-screen w-full items-center justify-center">
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
    </div>
  );
}

interface ClerkIconProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
}

export function ClerkIcon({ size = "18px", ...props }: ClerkIconProps) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      width={size}
      height={size}
      {...props}
    >
      <ellipse cx="9" cy="9" fill="#fff" rx="2.812" ry="2.813"></ellipse>
      <path
        fill="#fff"
        d="M14.067 15.659c.24.24.216.635-.066.824A8.957 8.957 0 0 1 9 18a8.957 8.957 0 0 1-5.002-1.517.533.533 0 0 1-.066-.824l2.055-2.055a.608.608 0 0 1 .708-.096A5.04 5.04 0 0 0 9 14.062c.83 0 1.614-.2 2.305-.554a.608.608 0 0 1 .708.096l2.055 2.055Z"
      ></path>
      <path
        fill="#fff"
        d="M14.002 1.517a.533.533 0 0 1 .066.824l-2.055 2.055a.608.608 0 0 1-.708.096 5.062 5.062 0 0 0-6.814 6.814c.12.233.09.521-.095.707l-2.055 2.055a.534.534 0 0 1-.824-.066A9 9 0 0 1 14.002 1.517Z"
        opacity=".5"
      ></path>
    </svg>
  );
}

export function GreenCheckIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="size-9">
      <path
        fill="#22C543"
        fillRule="evenodd"
        d="M18 28c5.523 0 10-4.477 10-10S23.523 8 18 8 8 12.477 8 18s4.477 10 10 10Zm-8-10a8 8 0 0 1 8-8v16a8 8 0 0 1-8-8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function RadioWaveIcon() {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden="true" className="size-9">
      <path
        className="stroke-neutral-600"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M18 9s4.5 3.6 0 9 0 9 0 9"
      ></path>
      <path
        stroke=""
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="6"
        d="M18 9s4.5 3.6 0 9 0 9 0 9"
        style={{ transform: "rotate(90deg)", transformOrigin: "18px 18px" }}
      ></path>
      <path
        className="stroke-neutral-400"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M18 9s4.5 3.6 0 9 0 9 0 9"
        style={{ transform: "rotate(90deg)", transformOrigin: "18px 18px" }}
      ></path>
    </svg>
  );
}

export function ClerkLogoIcon() {
  return (
    <svg
      viewBox="0 0 43 12"
      fill="none"
      aria-hidden="true"
      className="h-3 fill-neutral-600"
    >
      <circle cx="6.834" cy="6" r="1.875" fill="currentColor"></circle>
      <path
        fill="#747686"
        d="M10.212 10.44c.16.159.144.423-.044.548A5.972 5.972 0 0 1 6.834 12a5.972 5.972 0 0 1-3.335-1.012.356.356 0 0 1-.044-.549l1.37-1.37a.405.405 0 0 1 .472-.064c.46.236.983.37 1.537.37a3.36 3.36 0 0 0 1.536-.37.405.405 0 0 1 .472.064l1.37 1.37Z"
      ></path>
      <path
        fill="currentColor"
        d="M10.169 1.011c.187.126.203.39.044.55l-1.37 1.37a.405.405 0 0 1-.472.063 3.375 3.375 0 0 0-4.542 4.542c.08.157.06.349-.064.473l-1.37 1.37a.356.356 0 0 1-.55-.044 6 6 0 0 1 8.323-8.323Z"
        opacity=".5"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.426 1.219c0-.052.042-.094.094-.094h1.406c.052 0 .094.042.094.094v9.562a.094.094 0 0 1-.094.094H20.52a.094.094 0 0 1-.094-.094V1.22ZM18.44 8.847a.096.096 0 0 0-.129.004 2.508 2.508 0 0 1-1.732.675 2.111 2.111 0 0 1-.827-.142 2.076 2.076 0 0 1-.7-.451c-.364-.37-.573-.9-.573-1.53 0-1.263.84-2.126 2.1-2.126.338-.005.673.063.98.2.28.124.53.3.738.52a.097.097 0 0 0 .133.009l.95-.822a.092.092 0 0 0 .009-.13c-.715-.798-1.833-1.21-2.897-1.21-2.142 0-3.661 1.445-3.661 3.57 0 1.052.377 1.937 1.014 2.562.637.625 1.544.993 2.59.993 1.312 0 2.368-.503 2.987-1.149a.091.091 0 0 0-.007-.132l-.975-.841Zm11.325-.977a.093.093 0 0 1-.092.082h-4.927a.09.09 0 0 0-.088.114c.245.908.975 1.458 1.973 1.458.336.007.67-.062.974-.202.284-.13.535-.32.738-.553a.069.069 0 0 1 .096-.009l.99.862c.038.033.044.09.011.129-.598.705-1.566 1.218-2.896 1.218-2.045 0-3.588-1.417-3.588-3.568 0-1.056.363-1.941.97-2.566.319-.322.702-.576 1.126-.746a3.4 3.4 0 0 1 1.334-.245c2.073 0 3.414 1.458 3.414 3.471a5.72 5.72 0 0 1-.035.555Zm-5.078-1.306a.09.09 0 0 0 .088.114h3.275a.09.09 0 0 0 .089-.115c-.223-.772-.79-1.288-1.67-1.288a1.826 1.826 0 0 0-1.382.572c-.184.208-.32.453-.4.717Zm9.987-2.72c.052 0 .095.042.095.095v1.574a.094.094 0 0 1-.101.094 6.153 6.153 0 0 0-.39-.021c-1.227 0-1.947.863-1.947 1.996v3.2a.094.094 0 0 1-.094.093h-1.406a.094.094 0 0 1-.094-.094V4.036c0-.052.042-.094.094-.094h1.406c.052 0 .094.042.094.094v.947a.01.01 0 0 0 .017.005c.55-.734 1.362-1.142 2.219-1.142l.107-.001Zm3.809 4.124a.03.03 0 0 1 .048.005l1.778 2.858a.094.094 0 0 0 .08.044h1.598c.074 0 .119-.08.08-.143l-2.44-3.936a.094.094 0 0 1 .01-.112L41.99 4.09a.094.094 0 0 0-.07-.156h-1.667a.094.094 0 0 0-.07.03l-2.718 2.964a.094.094 0 0 1-.163-.063V1.219a.094.094 0 0 0-.094-.094h-1.406a.094.094 0 0 0-.094.094v9.562c0 .052.042.094.094.094h1.406a.094.094 0 0 0 .094-.094V9.276c0-.023.009-.046.025-.063l1.158-1.245Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
