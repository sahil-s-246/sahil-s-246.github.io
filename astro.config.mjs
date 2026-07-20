import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://sahil-s-246.github.io',
    integrations: [
        react(),
    ],
});