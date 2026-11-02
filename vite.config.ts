import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: { port: 3001, host: "127.0.0.1" },
  plugins: [react()],
  envPrefix: ["VITE_", "GA_"],
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
});
