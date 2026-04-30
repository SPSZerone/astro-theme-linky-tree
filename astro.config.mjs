/* global process */
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

import icon from 'astro-icon';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  trailingSlash: isDev ? 'ignore' : 'always',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ['s3.us-east-1.amazonaws.com', 'example.com'],
  },
  adapter: cloudflare(),
  output: 'static',
});
