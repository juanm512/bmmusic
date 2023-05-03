import ParallaxText from "./ParallaxText"

export default function ScrollAnimatedListenNowBanner() {
	return(
		<div className="relative w-full my-16">
			<div className="relative my-2 h-1.5 w-full bg-neutral-100" />
			<section>
				<ParallaxText baseVelocity={-2}>
					<p className="z-10 antialiased ">Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center ml-8 rounded-full border-2 p-2 text-xl font-semibold tracking-wide">
          BM
					</div>
				</ParallaxText>
			</section>
			<section className="absolute top-8 left-4 opacity-5 -z-10">
				<ParallaxText baseVelocity={2}>
					<p>Listen Now</p>
					<div className="flex h-fit my-auto items-center justify-center ml-8 rounded-full border-2 p-2 text-xl font-semibold tracking-wide">
          BM
					</div>
				</ParallaxText>
			</section>
			<div className="relative my-2 h-1.5 w-full bg-neutral-100" />

		</div>
	)
}
