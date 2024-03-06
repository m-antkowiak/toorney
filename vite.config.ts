import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from '@nabla/vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [vue(), eslint({ eslintOptions: { cache: false } }), stylelint()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
