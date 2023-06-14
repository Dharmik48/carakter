/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: '#141415',
				accent: '#ff6b27',
			},
			fontFamily: {
				outfit: ['Outfit', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
