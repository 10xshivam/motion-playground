"use client";

import { IconSparkles2Filled } from "@tabler/icons-react";
import { useAnimate, motion, stagger } from "motion/react";

export function AnimatedText() {
  const [scope, animate] = useAnimate();

  const para =
    "Success in development is quiet at first. It looks like failed builds, messy drafts, and long nights of doubt, until one day all that persistence becomes a product, a skill, and a career.";

  const handleClick = () => {
    animate(
      "span",
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.09),
      },
    );
  };

  return (
    <div ref={scope} className="flex flex-col  gap-10">
      <button
        onClick={handleClick}
        className="flex size-14 items-center justify-center border border-neutral-800 text-neutral-500 transition-all duration-300 hover:text-yellow-500 active:scale-95"
      >
        <IconSparkles2Filled className="size-8" />
      </button>
      <div className="font-heading flex max-w-4xl flex-wrap gap-2">
        {para.split(" ").map((word, index) => (
          <motion.span
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            key={index}
            className="text-4xl tracking-wide text-neutral-300"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
