/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'midnight': '#121063',
				'tahiti': {
					'light': '#62d9e6',
					'dark': '#0a373c',
				}
			}
		},
	},
	plugins: [],
}
