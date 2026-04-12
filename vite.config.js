import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const deferStylesPlugin = {
  name: 'defer-styles-plugin',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet"(?: crossorigin)? href="([^"]+)">/g,
      (_match, href) => `<link rel="preload" as="style" href="${href}"><link rel="stylesheet" href="${href}" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`
    );
  },
};

export default defineConfig({
  plugins: [react(), deferStylesPlugin],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'helmet': ['react-helmet-async'],
        },
      },
    },
  },
  server: {
    port: 3002,
    strictPort: true,
  },
  preview: {
    port: 3002,
    strictPort: true,
  },
});