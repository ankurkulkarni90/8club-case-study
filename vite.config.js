import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Smart config: Vercel gets '/', GitHub Pages keeps '/8club-case-study/'
  base: process.env.VERCEL === '1' ? '/' : '/8club-case-study/',
})