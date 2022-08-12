import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import typescript2 from 'rollup-plugin-typescript2';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'audako-core-components',
      fileName: () => 'main.js',
      formats: ['es'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    svelte({
      emitCss: false,
    }),
    typescript2({
      exclude: ['node_modules/**', './src/stories/**'],
      tsconfigOverride: {
        declaration: true,
        exclude: ['node_modules/**', './src/stories/**'],
      },
    }),
  ],
});
