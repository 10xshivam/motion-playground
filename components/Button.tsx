"use client";

import { motion } from "motion/react";

export const Button = () => {
  return (
    <motion.button
      style={{ perspective: 1000 }}
      whileHover={{
        scale: 1.01,
        rotateX: 25,
        rotateY: 15,
        y: -10,
        transition: {
          duration: 0.3,
          ease: "easeIn",
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="bg-white text-neutral-500 px-12 py-4 font-semibold tracking-wide rounded-t-2xl text-2xl border-b-4 border-b-cyan-500 hover:text-cyan-600 transition-colors duration-300 cursor-pointer shadow-cyan-500"
    >
      
    </motion.button>
  );
};
