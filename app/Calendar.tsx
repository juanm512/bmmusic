export default function Calendar() {
	return(
		<div className="w-full relative px-2 sm:px-16 py-24">

			<div className="flex flex-row items-center justify-end pb-8">
				<h1 className="text-3xl sm:text-7xl font-normal text-neutral-300 uppercase">
          Calendario
				</h1>
			</div>
			<div className="relative h-px w-full bg-neutral-100/50" />
			<div className="relative flex flex-col sm:flex-row flex-wrap items-center justify-start">

				<div className="w-1/2 h-96">
					<div className="flex flex-row items-center justify-start p-8">
						<p className="text-4xl font-normal text-neutral-300 uppercase">
              TO
						</p>
					</div>
				</div>
        
				<div className="w-1/2 h-96">
					<div className="flex flex-row items-center justify-start p-8">
						<p className="text-4xl font-normal text-neutral-300 uppercase">
                DO
						</p>
					</div>
				</div>

				<div className="w-1/2 h-96">
					<div className="flex flex-row items-center justify-start p-8">
						<p className="text-4xl font-normal text-neutral-300 uppercase">
              TO
						</p>
					</div>
				</div>
				
				<div className="w-1/2 h-96">
					<div className="flex flex-row items-center justify-start p-8">
						<p className="text-4xl font-normal text-neutral-300 uppercase">
                DO
						</p>
					</div>
				</div>
			</div>
			<div className="absolute left-[10%] top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
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
		</div>
	)
}