import NavBar from "./NavBar"
import TinyListenNowBanner from "./TinyListenNowBanner"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "BM - MUSICA",
	description: "BM MUSICA"
}

export default function RootLayout({
	children
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="es">
			<body className={inter.className + " selection:bg-secondary selection:text-neutral-300"}>
				<TinyListenNowBanner />
				{/* <NavBar /> */}
				{children}
				{/* footer */}
				<NavBar />
				<TinyListenNowBanner />
			</body>
		</html>
	)
}
