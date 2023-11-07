import { defineConfig } from "astro/config"

import serviceWorker from "astrojs-service-worker"
import tailwind from "@astrojs/tailwind"
import viteSSL from "vite-plugin-mkcert"

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://ownclock.app",
  integrations: [serviceWorker(), tailwind()],
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
