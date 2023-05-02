import Image from "next/image"
import ButtonPlay from "./ButtonPlay"

export default function BigListenNowBanner() {
	return (
		<div className="w-full relative px-2 sm:px-16 pt-8">

			<div className="flex flex-col items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<h1 className="sm:text-justify text-7xl sm:text-9xl font-normal text-neutral-300">
            Lo más escuchado
					</h1>
				</div>
			</div>
			<div className="relative my-8 h-px w-full bg-neutral-100/50" />
			<div className="relative flex h-0 w-full items-center justify-center sm:pr-8">
				{/* hacer otro como si fuera una bocina sonando */}
			</div>
			<div className="relative aspect-h-10 sm:aspect-h-6 aspect-w-16">
				<ButtonPlay classes="top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" />
				<Image
					src="/cover.jpg"
					alt="Picture of the author"
					width={1920}
					height={1080}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="absolute left-[50%] top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<svg
					className="relative left-[calc(10%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-80 sm:left-[calc(10%-30rem)] sm:h-[62.375rem]"
					viewBox="0 0 1155 678"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
						fillOpacity=".2"
						d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
					/>
					<defs>
						<linearGradient
							id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
							x1="1155.49"
							x2="-78.208"
							y1=".177"
							y2="474.645"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#59FF00"></stop>
							<stop
								offset="1"
								stopColor="#A600FF"
							></stop>
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="relative my-8 h-px w-full bg-neutral-100/50" />

		</div>
	)
}
