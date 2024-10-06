import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  devToolbar: {
    enabled: false
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  integrations: [react()]
});