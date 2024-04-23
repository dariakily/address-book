import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  plugins: [react(), EnvironmentPlugin('all', { prefix: 'REACT_APP_' })],
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true
    },
    hmr: {
      host: '0.0.0.0',
    },
  },
  define: {
    global: 'window'
  }
});
