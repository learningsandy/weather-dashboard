import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  base: '/weather-dashboard/',
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: 'build'
  },
  plugins: [react()],
  resolve: {
    // Optional: Add aliases if needed for easier imports
    alias: {
      '@assets': '/src/assets', // Example alias for assets folder
    },
  },
});