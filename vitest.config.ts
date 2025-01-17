import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    browser: {
      provider: "playwright",
      enabled: true,
      name: "chromium",
      viewport: { width: 640, height: 480 },
    },
    setupFiles: ["./tests/setup-tests.ts"],
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  define: {
    global: {},
    process: {
      env: {},
    },
  },
});
