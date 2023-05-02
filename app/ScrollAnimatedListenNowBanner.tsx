"use client"
import {  
	motion, 
	useScroll, 
	useSpring, 
	useVelocity,
	useTransform,
	useMotionValue,
	useAnimationFrame 
} from "framer-motion"
import { useRef } from "react"

const wrap = (min: number, max: number, v: number) => {
	const rangeSize = max - min
	return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

export default function ScrollAnimatedListenNowBanner() {
	return(
		<div className="relative w-full my-16">
			<div className="relative my-2 h-1.5 w-full bg-neutral-100" />
			{/* <div className="overflow-hidden m-0 whitespace-nowrap flex flex-row flex-nowrap py-2">
				<motion.div 
					style={{ x }} 
					className="flex flex-row flex-nowrap gap-8 whitespace-nowrap text-7xl font-medium uppercase text-neutral-300 -tracking-wider"
				>
					<p>Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center rounded-full border-2 p-2 text-lg font-semibold tracking-wide">
          BM
					</div>
					<p>Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center rounded-full border-2 p-2 text-lg font-semibold tracking-wide">
          BM
					</div>
					<p>Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center rounded-full border-2 p-2 text-lg font-semibold tracking-wide">
          BM
					</div>
					<p>Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center rounded-full border-2 p-2 text-lg font-semibold tracking-wide">
          BM
					</div>
				</motion.div>
			</div> */}
			<section>
				<ParallaxText baseVelocity={-2}><p className="antialiased">Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center ml-8 rounded-full border-2 p-2 text-xl font-semibold tracking-wide">
          BM
					</div></ParallaxText>
			</section>
			<section className="absolute top-8 left-4 opacity-5 -z-10">
				<ParallaxText baseVelocity={2}><p>Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center ml-8 rounded-full border-2 p-2 text-xl font-semibold tracking-wide">
          BM
					</div></ParallaxText>
			</section>
			<div className="relative my-2 h-1.5 w-full bg-neutral-100" />

		</div>
	)
}


interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
	const baseX = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400
	})
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false
	})

	/**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
	const x = useTransform(baseX, (v) => `${wrap(-10, -55, v)}%`)

	const directionFactor = useRef<number>(1)
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

		/**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get()

		baseX.set(baseX.get() + moveBy)
	})

	/**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
	return (
		<div className="parallax">
			<motion.div className="scroller" style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	)
}