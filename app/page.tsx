import BigListenNowBanner from "./BigListenNowBanner"
import Calendar from "./Calendar"
import PrincipalSection from "./PrincipalSection"
import ScrollAnimatedListenNowBanner from"./ScrollAnimatedListenNowBanner"
import TrackList from"./TrackList"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
			{/* principal section with a popular song/ trending and the image of the song with a button to play it */}
			<PrincipalSection />

			{/* listen now banner big with scrolling animation (framer motion example) */}
			<ScrollAnimatedListenNowBanner />

			{/* tracklist */}
			<TrackList />

			{/* calendario */}
			<Calendar />

			{/* last listen now very big with the same image in the begining */}
			<BigListenNowBanner />


			<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
				<svg
					className="relative left-[calc(10%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] opacity-80 sm:left-[calc(10%-30rem)] sm:h-[42.375rem]"
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
		</main>
	)
}
