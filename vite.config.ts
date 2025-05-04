import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import * as path from 'path'
export default defineConfig({
  plugins: [UnoCSS(), react()],
  base: '/course-app',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
