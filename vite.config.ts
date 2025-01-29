import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import path from "path";
import vitePluginCompression from "vite-plugin-compression";
import imageminLoader from 'vite-plugin-imagemin';

export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@templates": path.resolve(__dirname, "./src/templates"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    vitePluginCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    imageminLoader({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 20 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash', 'moment'],
        },
      },
    },
  },
});