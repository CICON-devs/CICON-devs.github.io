// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cicon-devs.github.io',
  integrations: [icon({
    lucide: () => import('@iconify-json/lucide/icons.json'),
  })],

  vite: {
    plugins: [tailwindcss()]
  }
});