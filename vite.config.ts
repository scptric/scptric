import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const gaId = env.VITE_GA_MEASUREMENT_ID || env.GA_MEASUREMENT_ID || "";
  const gtmId = env.VITE_GTM_ID || env.GTM_ID || "";

  return {
    server: { port: 3001, host: "127.0.0.1" },
    plugins: [
      react(),
      {
        name: "html-env-compat",
        transformIndexHtml(html) {
          return html
            .replace(/%(?:VITE_)?GA_MEASUREMENT_ID%/g, gaId)
            .replace(/%(?:VITE_)?GTM_ID%/g, gtmId);
        },
      },
    ],
    envPrefix: ["VITE_", "GA_", "GTM_"],
    resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  };
});
