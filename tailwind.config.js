/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: 
           "#59FF00",
				secondary:
          "#A600FF"
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
		aspectRatio: {
			auto: "auto",
			square: "1 / 1",
			video: "16 / 9",
			1: "1",
			2: "2",
			3: "3",
			4: "4",
			5: "5",
			6: "6",
			7: "7",
			8: "8",
			9: "9",
			10: "10",
			11: "11",
			12: "12",
			13: "13",
			14: "14",
			15: "15",
			16: "16",
		},
	},
	// corePlugins: {
	// 	aspectRatio: false,
	// },
	plugins: [
		import("@tailwindcss/aspect-ratio")
		// ...
	],
}