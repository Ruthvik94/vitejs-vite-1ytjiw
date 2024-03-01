import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      template: 'treemap',
    }),
  ],
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public/'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          grommet: ['grommet', 'grommet-icons', 'grommet-theme-hpe'],
        },
      },
    },
  },
});
