"use client"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export default function ButtonPlay() {
  const [hovered, setHovered] = React.useState(false)
  const [pressed, setPressed] = React.useState(false)

  return (
    <motion.div
      className="group absolute z-10 flex h-48 w-48 cursor-pointer items-center justify-center rounded-full "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <p className="pb-2 pl-2 text-7xl font-bold text-neutral-900 transition-colors duration-500 group-hover:text-neutral-800">
        ▶
      </p>
      <svg
        viewBox="0 0 200 200"
        className="absolute z-10 h-full w-full text-black"
      >
        <defs>
          <path
            id="curve"
            d="
                 M 100, 100
                 m -75, 0
                 a 75,75 0 1,0 150,0
                 a 75,75 0 1,0 -150,0
                 "
          />
        </defs>
        <text width="200">
          <textPath
            href="#curve"
            className="uppercase"
          >
            Play me Play me Play me Play me Play me Play me Play me Play me Play
            me{" "}
          </textPath>
        </text>
      </svg>
      <div className="absolute z-[-1] h-full w-full rounded-full bg-primary/80 shadow-2xl shadow-primary/90 ring-8 ring-neutral-900" />
      <AnimatePresence>
        <motion.div
          animate={
            hovered
              ? pressed
                ? { y: 45, x: 35 }
                : { y: 25, x: 15 }
              : { y: 0, x: 0 }
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="absolute -z-10 h-full w-full rounded-full bg-primary/20 shadow-xl shadow-primary/80 ring-8 ring-neutral-900"
        />
        {pressed && (
          <motion.div
            animate={{ y: 45, x: 35 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="absolute -z-10 h-full w-full rounded-full bg-primary/20 shadow-xl shadow-primary/80 ring-8 ring-neutral-900"
          />
        )}
        {pressed && (
          <motion.div
            animate={{ y: 45, x: 35 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20
            }}
            className="absolute -z-10 h-full w-full rounded-full bg-primary/20 shadow-xl shadow-primary/80 ring-8 ring-neutral-900"
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
