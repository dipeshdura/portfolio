import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  
    proxy: {
      "/api": {
        target: "https://portfolio-scx5.onrender.com",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
