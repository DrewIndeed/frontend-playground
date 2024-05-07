import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { PluginConfig } from "svgo";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://github.com/FatehAK/vite-plugin-image-optimizer
const DEFAULT_IMG_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|svg|avif|webp)$/i, // excluded webp
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false, // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      "sortAttrs",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
        },
      },
    ] as PluginConfig[],
  },
  png: {
    // https://sharp.pixelplumbing.com/api-output#png
    quality: 25,
  },
  jpeg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 25,
  },
  jpg: {
    // https://sharp.pixelplumbing.com/api-output#jpeg
    quality: 25,
  },
  tiff: {
    // https://sharp.pixelplumbing.com/api-output#tiff
    quality: 25,
  },
  // gif does not support lossless compression
  // https://sharp.pixelplumbing.com/api-output#gif
  gif: {},
  webp: {
    // https://sharp.pixelplumbing.com/api-output#webp
    loseless: true,
    effort: 2,
  },
  avif: {
    // https://sharp.pixelplumbing.com/api-output#avif
    lossless: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer(DEFAULT_IMG_OPTIONS),
    chunkSplitPlugin(),
    viteCompression({
      algorithm: "brotliCompress",
    }),
  ],
  server: {
    port: 1080,
  },
  preview: {
    port: 1080,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    chunkSizeWarningLimit: 550,
    sourcemap: false,
    cssCodeSplit: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (
            id.includes("react-router-dom") ||
            id.includes("@remix-run") ||
            id.includes("react-router")
          ) {
            return "@react-router";
          }
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
