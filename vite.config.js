import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools(),

    visualizer({ open: true }),
    compression({
      algorithm: "gzip", // or 'brotliCompress'
      ext: ".gz", // file extension
    }),
  ],
  base: "/",

  build: {
    sourcemap: false,
    rollupOptions: {
      treeshake: true,
    },
    minify: "esbuild", // or 'terser'
    target: "es2015",
  },

  assetsInclude: ["**/*.webp", "**/*.avif"],
});
