import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'http://localhost:3000',
  server: {
    port: 3000,
  },
  preview: {
    port: 3000, 
    cors: {
      origin: "*"
    },
  },
})
