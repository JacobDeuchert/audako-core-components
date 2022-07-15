import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import typescript2 from 'rollup-plugin-typescript2';
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'audako-core-components',
      fileName: () => 'main.js',
      formats: ['es']
    },
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      },
    }),
    typescript2({
      tsconfigOverride: {
        declaration: true
      }
    }),
  ],
});
