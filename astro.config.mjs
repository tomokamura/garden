import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  experimental: {
    hybridOutput: true
  },
  integrations: [solidJs(), tailwind()],
  adapter: netlify()
});