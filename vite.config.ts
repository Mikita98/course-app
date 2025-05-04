import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import * as path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  base: 'https://mikita98.github.io/course-app',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
