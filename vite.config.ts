import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-motion": ["framer-motion"],
          "vendor-countup": ["react-countup"],
          "vendor-intersection": ["react-intersection-observer"],
        },
      },
    },
  },
});
