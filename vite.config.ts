import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'auth_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Auth': './src/routes.tsx', // Expone el componente de Login
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  build: {
    target: 'esnext'
  },
  //alias
  
  
})
