import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig, transformWithEsbuild } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: '/image-reveal-project/',
  resolve: {
    alias: {
      'react': resolve(__dirname, 'node_modules/react'),
      'react-dom': resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  plugins: [
    react(),
    {
      name: 'treat-js-files-as-jsx',
      async transform(code, id) {
        if (!id.endsWith('.js') || id.includes('node_modules')) return null
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        })
      },
    },
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cartier: resolve(__dirname, 'cartier.html'),
        chanel: resolve(__dirname, 'chanel.html'),
        coach: resolve(__dirname, 'coach.html'),
        louis: resolve(__dirname, 'louis.html'),
        prada: resolve(__dirname, 'prada.html'),
        dior: resolve(__dirname, 'dior.html'),
        gucci: resolve(__dirname, 'gucci.html'),
        bottega: resolve(__dirname, 'bottega.html'),
        katespade: resolve(__dirname, 'katespade.html'),
        burberry: resolve(__dirname, 'burberry.html'),
        fendi: resolve(__dirname, 'fendi.html'),
        katespadeshoes: resolve(__dirname, 'katespadeshoes.html'),
        guccishoes: resolve(__dirname, 'guccishoes.html'),
        fendishoes: resolve(__dirname, 'fendishoes.html'),
        diorpurses: resolve(__dirname, 'diorpurses.html'),
        fendipurses: resolve(__dirname, 'fendipurses.html'),
        bottegapurses: resolve(__dirname, 'bottegapurses.html'),
      },
    },
  },
})
