const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@parts": path.resolve(__dirname, "src/ui-parts/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@layout": path.resolve(__dirname, "src/layouts/"),
    },
  },
};