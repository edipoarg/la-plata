import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  define: {
    VITE_API_F_KEY: import.meta.env.VITE_API_F_KEY,
    VITE_BASE_ID: import.meta.env.VITE_API_F_KEY,
  },
});
