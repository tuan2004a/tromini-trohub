import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@page": path.resolve(__dirname, "./src/pages"),
			"@layout": path.resolve(__dirname, "./src/components/layout"),
			"@common": path.resolve(__dirname, "./src/components/common"),
			"@MasterLayout": path.resolve(__dirname, "./src/components/layout/MasterLayOut"),
		},
	},
});
