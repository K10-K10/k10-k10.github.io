import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@parts": path.resolve(__dirname, "src/ui-parts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layout": path.resolve(__dirname, "src/layouts"),
    },
  },
});
