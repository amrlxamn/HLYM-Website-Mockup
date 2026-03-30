/// <reference types="vitest/config" />

import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const FRAME_ANCESTORS_POLICY = "frame-ancestors 'none'";

export default defineConfig({
  plugins: [react()],
  preview: {
    headers: {
      "Content-Security-Policy": FRAME_ANCESTORS_POLICY
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    headers: {
      "Content-Security-Policy": FRAME_ANCESTORS_POLICY
    }
  },
  test: {
    coverage: {
      exclude: [
        ".webflow/**",
        "**/dist/**",
        "eslint.config.js",
        "src/main.tsx",
        "src/styles/**",
        "src/**/*.types.ts",
        "src/vite-env.d.ts",
        "vite.config.ts"
      ],
      provider: "v8",
      reporter: ["text", "html"]
    },
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts"
  }
});
