import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindPlugin from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    tanstackStart(),
    react(),
    tailwindPlugin(),
    tsConfigPaths(),
  ],
  server: {
    middlewareMode: true,
  },
});
