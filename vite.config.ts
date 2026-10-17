import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",

  assetsInclude: ["**/*.md"],
  plugins: [react()],

  resolve: {
    alias: {
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@pages": new URL("./src/pages", import.meta.url).pathname,
      "@layouts": new URL("./src/layouts", import.meta.url).pathname,
      "@contents": new URL("./src/contents", import.meta.url).pathname,
    },
  },

  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes() {
      return ["/", "/about", "/blog", "/404"];
    },
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
