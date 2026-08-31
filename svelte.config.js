import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    // Required for the `<svelte:options customElement={...} />` wrappers and the
    // `$host()` rune. Components without that tag are unaffected and still
    // compile as ordinary Svelte components.
    customElement: true,
  },
};
