import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Developing-Front-End-Apps-with-React-IBM/', // Adjust this to match the repository name
  plugins: [react()],
})
