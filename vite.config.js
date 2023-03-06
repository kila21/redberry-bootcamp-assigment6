import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/redberry-bootcamp-assigment6/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
