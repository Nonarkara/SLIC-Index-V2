import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command }) => ({
  base:
    process.env.VERCEL
      ? "/"
      : command === "serve"
        ? "/"
        : "/slic-index-v2/",
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4176,
    strictPort: true,
  },
}));
