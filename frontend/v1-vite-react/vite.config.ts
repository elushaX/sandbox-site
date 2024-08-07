import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: '/sandbox-site',
	server: {
		host: true,  // This allows the server to be accessed externally
		port: 7700
	}
})
