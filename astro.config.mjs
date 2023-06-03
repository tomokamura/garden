import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'cache-control': 'public, max-age=0, must-revalidate"',
      'X-Vercel-Cache': 'REVALIDATED',
    }
  },
  integrations: [solidJs(), tailwind()],
});