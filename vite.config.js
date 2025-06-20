import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),

    // Brotli is smaller and more modern, fallback is gzip
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024, // compress only files > 1kb
      deleteOriginFile: false,
    }),

    // Optional gzip fallback
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),

    visualizer({ open: false }), // disable auto-open in CI
  ],

  base: "/",

  build: {
    outDir: "dist",
    ssrManifest: true,
    emptyOutDir: false, // to preserve dist/index.html when building SSR
  },

  assetsInclude: ["**/*.webp", "**/*.avif"],
});
