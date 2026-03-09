import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

/** Make main stylesheet non-render-blocking: load async so it doesn't block first paint. */
function asyncCssPlugin() {
  return {
    name: "async-css",
    transformIndexHtml: {
      order: "post",
      handler(html: string) {
        return html.replace(
          /<link([^>]*)\srel="stylesheet"([^>]*)href="([^"]+\.css)"([^>]*)>/gi,
          (_, before, _a, href, after) =>
            `<link rel="preload" as="style" href="${href}"${before}${after} onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet" href="${href}"${before}${after}></noscript>`
        );
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), asyncCssPlugin()],
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
