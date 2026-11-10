import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update this to your GitHub repository name before deploying.
export default defineConfig({
  plugins: [react()],
  base: '/bizness-birthday/',
})
