"use client"
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import useSound from "use-sound"


export default function ButtonPlay({classes} : {classes: string}) {
	const [hovered, setHovered] = React.useState(false)
	const [pressed, setPressed] = React.useState(false)
	const [play, { stop }] = useSound("/MA.mp3", { volume: 0.1 })

	const handleClick = () => {
		setPressed(!pressed)
		if (!pressed) {
			play()
		} else {
			stop()
		}
	}

	return (
		<motion.div
			className={`group absolute ${classes} z-10 flex h-32 sm:h-48 w-32 sm:w-48 cursor-pointer items-center justify-center rounded-full `}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => !pressed && setHovered(false)}
			onClick={() => handleClick()}
		>
			<p className=" select-none font-bold text-neutral-900 transition-colors duration-500 group-hover:text-neutral-800">
				<svg xmlns="http://www.w3.org/2000/svg" className=" h-16 w-16" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
					<AnimatePresence mode="wait">
						{!pressed ? (
							<><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M7 4v16l13 -8z"></path></>
						) : (
							<><path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
								<path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path></>
						)}
					</AnimatePresence>
				</svg>
			</p>
			<svg
				viewBox="0 0 200 200"
				className="absolute z-10 h-full w-full text-black scale-[1.2]"
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
						className="uppercase select-none font-bold text-neutral-900 overflow-hidden"
					>
            Play me Play me Play me Play me Play me Play me Play me{" "}
					</textPath>
				</text>
			</svg>
			<div className="absolute z-[-1] h-full w-full rounded-full bg-primary/90 shadow-2xl shadow-primary/90 ring-8 ring-neutral-900" />
			<AnimatePresence>
				<motion.div
					key="hoveredBG"
					animate={
						hovered
							? pressed
								? { y: 15, x: 7.5 }
								: { y: 10, x: 5 }
							: { y: 0, x: 0 }
					}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 20,
						mass: 2,
						// repeat: Infinity,
					}}
					className="absolute -z-10 h-full w-full rounded-full bg-primary/20 shadow-xl shadow-primary/80 ring-8 ring-neutral-900"
				/>

				{pressed && (
					<motion.div
						key="pressedBG"
						animate={{ y: 30, x: 15, scale: [1.01, 1.01, 1.02, 1, 1.01, 1] }}
						transition={{
							type: "spring",
							stiffness: 400,
							damping: 20,
							mass: 3,
							scale : { repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 },
						}}
						className="absolute -z-20 h-full w-full rounded-full bg-primary/20 shadow-xl shadow-primary/50 ring-8 ring-neutral-900"
					/>
				)}

			</AnimatePresence>
		</motion.div>
	)
}
