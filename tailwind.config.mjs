/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#e36d63",
				secondary: "#938a78",
				light: "#f3f3f3",
				dark: "#08020e",
			},
		},
	},
	plugins: [],
};
