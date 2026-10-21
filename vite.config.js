import { env } from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: env.VITE_BASE_PATH || (env.NODE_ENV === 'production' ? '/fly748new/' : '/'),
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
})
