import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: {
      components: path.join(src, "components"),
      pages: path.join(src, "pages"),
      hooks: path.join(src, "hooks"),
      styles: path.join(src, "styles"),
    },
  },
});
