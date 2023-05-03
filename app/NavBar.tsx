"use client"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

const redes = [
	{
		name: "Apple Music",
		url: "https://music.apple.com/ar/artist/bm/1558455599"
	},
	{
		name: "Spotify",
		url: "https://open.spotify.com/artist/5TP8Ubo4jLKEi4Mw2O8fAk"
	},
	{
		name: "Youtube",
		url: "https://www.youtube.com/@BMCanalOficial/featured"
	},
	{
		name: "Youtube-Music",
		url: "https://music.youtube.com/channel/UCONxiz3pKjS32xC91ydXlvQ"
	},
	{
		name: "Instagram",
		url: "https://www.instagram.com/bm.oficial.ok/"
	},
	{
		name: "Email",
		url: "mailto:info@bmmusica.com"
	}
]

export default function NavBar() {
	const [hovered, setHovered] = React.useState("none")

	return (
		<div className="relative w-full px-2 sm:px-16 py-4">
			<div className="flex h-fit w-full flex-row items-center justify-between uppercase text-neutral-300">
				<div className="flex items-center justify-center rounded-full border-2 p-2 text-lg font-semibold">
          BM
				</div>
				<div className="flex flex-row flex-wrap items-center justify-around gap-0 text-base font-normal uppercase">
					{redes.map((red) => (
						<Link
							key={red.name}
							href={red.url}
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex flex-col items-center justify-center px-6 py-1"
							onMouseEnter={() => setHovered(red.name)}
							onMouseLeave={() => setHovered("none")}
						>
							<AnimatePresence>
								{hovered === red.name && (
									<>
										<motion.div
											layoutId="linkhovered"
											transition={{
												type: "spring",
												stiffness: 200,
												damping: 33
											}}
											className="absolute h-full w-full rounded-sm bg-secondary/90 shadow-2xl shadow-secondary/50"
										/>
										<motion.div
											layoutId="linkhoveredshadow"
											transition={{
												type: "spring",
												stiffness: 190,
												damping: 28
											}}
											className="absolute -z-10 ml-4 mt-2 h-full w-full rounded-sm bg-secondary/50"
										/>
									</>
								)}
							</AnimatePresence>
							<span className="z-10 mix-blend-exclusion">{red.name}</span>
						</Link>
					))}
				</div>
			</div>
			{/* <div className="relative my-8 h-px w-full bg-neutral-100/50" /> */}
		</div>
	)
}
