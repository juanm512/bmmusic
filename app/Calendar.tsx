import Image from "next/image"
import Link from "next/link"

export default function Calendar() {
	return(
		<div className="w-full relative px-2 sm:px-16 py-24">

			<div className="flex flex-row items-center justify-end pb-8">
				<h1 className="text-3xl sm:text-7xl font-normal text-neutral-300 uppercase">
          Calendario
				</h1>
			</div>
			<div className="relative h-px w-full bg-neutral-800" />
			<div className="relative flex flex-col sm:flex-row flex-wrap items-center justify-start">

				<div className="group relative basis-1/2 aspect-square border-b border-r border-neutral-800 bg-transparent overflow-hidden">
					<div className="aspect-square h-full w-full flex flex-col justify-between p-8">
						<div className="flex flex-col justify-start">
							<Link href={""}
								target="_blank"
								className="text-5xl font-normal text-neutral-300 uppercase mb-2 hover:underline -tracking-wider w-fit"
							>
              Proyecto V
							</Link>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- 20:00hs
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Junio 9, 2023
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Chivilcoy, BsAs
							</p>
						</div>
						<div className="flex justify-center sm:justify-end items-start">
							<Link 
								href={""}
								target="_blank"
								className="text-xl sm:text-3xl font-normal text-neutral-300 uppercase hover:underline -tracking-wider" 
							>
              Comprar Entradas
								<svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 w-10 h-10 inline-block text-primary" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M17 7l-10 10"></path>
									<path d="M8 7l9 0l0 9"></path>
								</svg>
							</Link>
						</div>
					</div>
					<Image
						src="/cover.jpg"
						alt="Picture of the author"
						width={1920}
						height={1080}
						className="absolute aspect-square -z-10 inset-0 object-cover sm:opacity-0 sm:group-hover:opacity-80 blur transition-all duration-1000 object-right group-hover:object-left"
					/>
				</div>
        
				<div className="group relative basis-1/2 aspect-square border-b border-neutral-800 bg-transparent overflow-hidden">
					<div className="aspect-square h-full w-full flex flex-col justify-between p-8">
						<div className="flex flex-col justify-start">
							<Link href={""}
								target="_blank"
								className="text-5xl font-normal text-neutral-300 uppercase mb-2 hover:underline -tracking-wider w-fit"
							>
              Proyecto V
							</Link>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- 20:00hs
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Junio 9, 2023
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Chivilcoy, BsAs
							</p>
						</div>
						<div className="flex justify-center sm:justify-end items-start">
							<Link 
								href={""}
								target="_blank"
								className="text-xl sm:text-3xl font-normal text-neutral-300 uppercase hover:underline -tracking-wider" 
							>
              Comprar Entradas
								<svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 w-10 h-10 inline-block text-primary" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M17 7l-10 10"></path>
									<path d="M8 7l9 0l0 9"></path>
								</svg>
							</Link>
						</div>
					</div>
					<Image
						src="/cover.jpg"
						alt="Picture of the author"
						width={1920}
						height={1080}
						className="absolute aspect-square -z-10 inset-0 object-cover sm:opacity-0 sm:group-hover:opacity-80 blur transition-all duration-1000 object-right group-hover:object-left"
					/>
				</div>

				<div className="group relative basis-1/2 aspect-square border-b border-r border-neutral-800 bg-transparent overflow-hidden">
					<div className="aspect-square h-full w-full flex flex-col justify-between p-8">
						<div className="flex flex-col justify-start">
							<Link href={""}
								target="_blank"
								className="text-5xl font-normal text-neutral-300 uppercase mb-2 hover:underline -tracking-wider w-fit"
							>
              Proyecto V
							</Link>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- 20:00hs
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Junio 9, 2023
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Chivilcoy, BsAs
							</p>
						</div>
						<div className="flex justify-center sm:justify-end items-start">
							<Link 
								href={""}
								target="_blank"
								className="text-xl sm:text-3xl font-normal text-neutral-300 uppercase hover:underline -tracking-wider" 
							>
              Comprar Entradas
								<svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 w-10 h-10 inline-block text-primary" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M17 7l-10 10"></path>
									<path d="M8 7l9 0l0 9"></path>
								</svg>
							</Link>
						</div>
					</div>
					<Image
						src="/cover.jpg"
						alt="Picture of the author"
						width={1920}
						height={1080}
						className="absolute aspect-square -z-10 inset-0 object-cover sm:opacity-0 sm:group-hover:opacity-80 blur transition-all duration-1000 object-right group-hover:object-left"
					/>
				</div>
				
				<div className="group relative basis-1/2 aspect-square border-b border-neutral-800 bg-transparent overflow-hidden">
					<div className="aspect-square h-full w-full flex flex-col justify-between p-8">
						<div className="flex flex-col justify-start">
							<Link href={""}
								target="_blank"
								className="text-5xl font-normal text-neutral-300 uppercase mb-2 hover:underline -tracking-wider w-fit"
							>
              Proyecto V
							</Link>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- 20:00hs
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Junio 9, 2023
							</p>
							<p className="text-base font-normal text-neutral-300 uppercase">
							-- Chivilcoy, BsAs
							</p>
						</div>
						<div className="flex justify-center sm:justify-end items-start">
							<Link 
								href={""}
								target="_blank"
								className="text-xl sm:text-3xl font-normal text-neutral-300 uppercase hover:underline -tracking-wider" 
							>
              Comprar Entradas
								<svg xmlns="http://www.w3.org/2000/svg" className="-mt-1 w-10 h-10 inline-block text-primary" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M17 7l-10 10"></path>
									<path d="M8 7l9 0l0 9"></path>
								</svg>
							</Link>
						</div>
					</div>
					<Image
						src="/cover.jpg"
						alt="Picture of the author"
						width={1920}
						height={1080}
						className="absolute aspect-square -z-10 inset-0 object-cover sm:opacity-0 sm:group-hover:opacity-80 blur transition-all duration-1000 object-right group-hover:object-left"
					/>
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