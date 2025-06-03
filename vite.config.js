import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";
import compression from "vite-plugin-compression";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools(), compression()],
    assetsInclude: ['**/*.webp', '**/*.avif'],

});
