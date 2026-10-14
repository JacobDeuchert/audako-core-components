import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess(),
  compilerOptions: {
    // Required for the `<svelte:options customElement={...} />` wrappers and the
    // `$host()` rune. Components without that tag are unaffected and still
    // compile as ordinary Svelte components.
    customElement: true,
    // Runes only for our own components; libraries in node_modules keep
    // whichever mode they were written in.
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true),
  },
};
