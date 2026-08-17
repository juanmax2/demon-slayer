import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // 💡 Esto obliga a Vite a usar SIEMPRE la misma copia de React
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    // Evita que Vite pre-empaquete estas librerías de forma separada
    include: ['react-hook-form', '@hookform/resolvers/zod', 'zod'],
  },
  base: '/demon-slayer/',
})