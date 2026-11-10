"use client"

import {motion} from "motion/react"

const letters = "Thinking".split("")
const cycle = 1.15
const stagger = 0.07

export default function Thinking() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-neutral-200'>
      <p className='tracking-tighter  text-neutral-400'>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className='inline-block'
            initial={{color: "#a3a3a3"}}
            animate={{
              color: ["#a3a3a3", "#737373", "#a3a3a3", "#a3a3a3"],
            }}
            transition={{
              duration: cycle,
              times: [0, 0.16, 0.33, 1],
              delay: index * stagger,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </p>
    </div>
  )
}
