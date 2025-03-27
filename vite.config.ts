
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";  // تغيير من plugin-react-swc إلى plugin-react
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),  // استخدام plugin-react بدلاً من plugin-react-swc
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
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
