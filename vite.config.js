import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['intersection-observer']
        }
      }
    },
    cssCodeSplit: true,
    sourcemap: false
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ]
    }
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173
  }
});