import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: env.VITE_BASE_URL || '/',
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // React core - changes infrequently
            'react-vendor': ['react', 'react-dom'],
            // Prop-types - development dependency often tree-shaken in prod
            'vendor': ['prop-types'],
          },
        },
      },
    },
  }
})
