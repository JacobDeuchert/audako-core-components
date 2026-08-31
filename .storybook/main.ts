import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/svelte-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  // addon-essentials, addon-links, blocks and addon-mdx-gfm were folded into
  // the storybook core package in v9.
  addons: ['@storybook/addon-svelte-csf', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  staticDirs: ['../src/assets'],
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
