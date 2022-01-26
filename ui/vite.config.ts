import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import { viteSingleFile } from 'vite-plugin-singlefile';
const path = require(`path`)

// https://vitejs.dev/config/
export default defineConfig({
  css: { preprocessorOptions: { scss: { charset: false } } },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
    viteSingleFile()
  ],
  build: {
    target: "esnext",
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js",
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    minify: false
  },
  resolve: {
    preserveSymlinks: false,
    alias: {
      vue: path.resolve(`./node_modules/vue`)
    }
  }
});
