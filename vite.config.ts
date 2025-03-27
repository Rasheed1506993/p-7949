
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";  // استخدام plugin-react بدلاً من plugin-react-swc
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react({
      babel: {
        plugins: [],
      },
      // تعطيل استخدام SWC
      jsxRuntime: "classic",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // إضافة خيارات خاصة بالبناء للتأكد من توافقها مع Capacitor
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: false,
  }
}));
