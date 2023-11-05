import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import viteSSL from "vite-plugin-mkcert"

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://ownclock.app",
  integrations: [tailwind()],
  vite: {
    plugins: [viteSSL()],
    server: {
      https: true,
    },
    build: {
      sourcemap: true,
    },
    esbuild: {
      legalComments: "none",
    },
  },
})
