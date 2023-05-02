"use client"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"

export default function TrackWrap({ children, imageSrc, to }: { children: React.ReactNode, imageSrc: string, to: string }) {
	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	function handleMouseMove({
		currentTarget,
		clientX,
		clientY,
	}: MouseEvent) {
		const { left, top } = currentTarget.getBoundingClientRect()

		mouseX.set(clientX - left)
		mouseY.set(clientY - top)
	}
	return (
		<Link 
			href={to}
			target="_blank"
			rel="noopener noreferrer"
			className="group relative w-full px-0 py-10 shadow-2xl overflow-hidden bg-transparent"
			onMouseMove={handleMouseMove}
		>
			{/* <motion.div
				className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100 mix-blend-luminosity"
				style={{
					background: useMotionTemplate`
            radial-gradient(
              150px circle at ${mouseX}px ${mouseY}px,
              #FFFFFF15,
              transparent 200%
            )
          `,
				}}
			/> */}
			<motion.div
				className="pointer-events-none hidden sm:flex absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-90 border-t-4 border-b-2 border-white mix-blend-lighten"
				style={{
					// backgroundImage: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, #000000, #59FF0020 50%)`,
					clipPath: useMotionTemplate`circle(25% at ${mouseX}px ${mouseY}px)`,
				}}
			>
				<Image
					src={imageSrc}
					alt="Picture of the author"
					width={1920}
					height={1080}
					className="absolute transition-opacity duration-500 group-hover:opacity-50 -z-10 inset-0 object-cover"
				/>
			</motion.div>
			<Image
				src={imageSrc}
				alt="Picture of the author"
				width={1920}
				height={1080}
				className="absolute transition-opacity duration-500 sm:opacity-0 sm:group-hover:opacity-80 -z-10 inset-0 object-cover blur"
			/>

			{children}
	
		</Link>
	)
}