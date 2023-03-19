const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {}
  },
  staticDirs: ['../src/assets'],
  docs: {
    autodocs: 'tag'
  }
};
export default config;