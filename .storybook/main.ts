import { fileURLToPath } from 'node:url';

const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  staticDirs: ['../src/assets'],
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const existingAliases = Array.isArray(config.resolve?.alias)
      ? config.resolve.alias
      : Object.entries(config.resolve?.alias ?? {}).map(([find, replacement]) => ({ find, replacement }));

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: [
          { find: /^audako-core$/, replacement: fileURLToPath(new URL('./audako-core-shim.ts', import.meta.url)) },
          ...existingAliases,
        ],
      },
    };
  },
};
export default config;
