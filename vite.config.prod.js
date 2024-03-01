/** @type {import('vite').UserConfig} */
import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import { rm } from 'fs/promises';
import { visualizer } from 'rollup-plugin-visualizer';

const BUILD_DIR = path.resolve(
  __dirname,
  './web/webroot/_ui/responsive/common/'
);
const JS_PATH = path.resolve(BUILD_DIR, './js/react');
const CSS_PATH = path.resolve(BUILD_DIR, './css/');

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    visualizer({
      gzipSize: true,
      open: false,
    }),
  ],
  mode: 'development',
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    exclude: ['*.locale', '*moment'],
  },
  resolve: {
    alias: {
      base: path.resolve(
        __dirname,
        './web/webroot/WEB-INF/_ui-src/react/assets/stylesheets/base'
      ),
      components: path.resolve(
        __dirname,
        './web/webroot/WEB-INF/_ui-src/react/assets/stylesheets/components'
      ),
      '@images': path.resolve(BUILD_DIR, './images'),
      '@fonts': path.resolve(BUILD_DIR, './fonts'),
      public: path.resolve(__dirname, 'public/'),
    },
  },
  base: './',
  logLevel: 'info',
  build: {
    outDir: path.resolve(__dirname, './web/webroot/_ui/responsive/common'),
    emptyOutDir: false,
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: './src/App.jsx',
        customTable: './src/CustomTable/CustomTable.jsx',
        wizard: './src/Wizard/Wizard.jsx',
      },
      output: {
        entryFileNames: `js/react/[name].bundle.js`,
        chunkFileNames: function ({ name }) {
          if (name === 'vendor') {
            return `js/react/vendors.bundle.js`;
          }

          return `js/react/[name].bundle.js`;
        },
        assetFileNames: function (file) {
          if (file.name.match(/\.(bmp|gif|jpe?g|svg|png)$/)) {
            return `images/[name].[hash:8].[ext]`;
          }

          if (file.name.match(/\.(ttf|otf|eot|woff|woff2)$/)) {
            return `fonts/[name].[ext]`;
          }

          if (file.name.match(/\.(le|c)ss$/)) {
            return `css/[name].css`;
          }
        },
      },
    },
    watch: true,
    minify: false,
    sourcemap: true,
  },
});
