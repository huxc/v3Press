import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/v3Press",
  optimizeDeps: {
    exclude: ["vitepress"],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [UnoCSS()],
});
