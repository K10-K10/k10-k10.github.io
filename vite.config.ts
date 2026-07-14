import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",

  assetsInclude: ["**/*.md"],
  plugins: [
    react()
  ],

  ssgOptions: {
    script: "async",
    formatting: "minify",
    includedRoutes() {
      return [
        "/",
        "/about",
        "/blog",
        "/docs",
        "/docs/tuilib",
        "/tools",
        "/tools/rgb",
        "/tools/github",
        "/tools/ants",
        "/404"
      ];
    }
  },

  resolve: {
    tsconfigPaths: true,
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
