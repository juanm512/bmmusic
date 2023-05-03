"use client"
import Link from "next/link"
import ParallaxText from "./ParallaxText"

const redes = [
	{
		name: "Apple Music",
		url: "https://music.apple.com/us/artist/benjamin-martinez/1555276360"
	},
	{
		name: "Spotify",
		url: "https://open.spotify.com/artist/5Z3Z1Z2Z2Z2Z2Z2Z2Z2Z2Z"
	},
	{
		name: "Youtube",
		url: "https://www.youtube.com/channel/UCZ3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z"
	}
]
export default function TinyListenNowBanner() {
	return (
		<div className="relative w-full">
			<div className="relative flex h-fit w-full flex-row flex-nowrap items-center justify-around gap-6 overflow-hidden whitespace-nowrap bg-primary py-2 text-sm font-semibold shadow-md shadow-primary/50 uppercase text-neutral-900">
				<ParallaxText baseVelocity={-2}>
					{redes.map((red) => (
						<>
							<p className=" text-base tracking-wide">Escúchame en</p>
							<button
								key={red.name}
								// href={red.url}
								// target="_blank"
								// rel="noopener noreferrer"
								className="relative flex flex-row text-base -tracking-wide items-center justify-center px-6 hover:underline"
							>
								<p className="z-10 uppercase text-neutral-900 inline-flex">{red.name}</p>
								<svg xmlns="http://www.w3.org/2000/svg" className="z-10 w-5 h-5 inline-flex text-secondary" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M17 7l-10 10"></path>
									<path d="M8 7l9 0l0 9"></path>
								</svg>
							</button>
						</>
					))}
				</ParallaxText>
			</div>
		</div>
	)
}
