import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic',
    babel: {
      presets: [],
      plugins: [],
    },
  })],
  esbuild: {
    loader: 'jsx', // 👈 force .js files to be treated as JSX
    include: /src\/.*\.[jt]sx?$/, 
    exclude: [],
  },
})
