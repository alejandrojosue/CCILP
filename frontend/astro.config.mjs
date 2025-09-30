import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  server: {
    port: 3001,
    host: '0.0.0.0'
  },
  integrations: [react()],
  adapter: node({
    mode: "standalone"
  })
})
