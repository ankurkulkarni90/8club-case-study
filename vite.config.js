import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change '8club-case-study' to match your GitHub repo name
  base: '/8club-case-study/',
})
