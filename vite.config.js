import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    host: true,
    strictPort: true,
    allowedHosts: [
      '7ed1-2c0f-2a80-38a-6f10-d0ef-c776-cf6d-7a7.ngrok-free.app'
    ]
  }
})
