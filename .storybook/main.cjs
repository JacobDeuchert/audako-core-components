
const svelteConfig = import("../svelte.config.js");
console.log(process.env);
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions1: {
          implementation: require("postcss"),
        }
      }
    },
    "@storybook/addon-svelte-csf"
    
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "svelteOptions": {
    "preprocess": {
      typescript: true,
      postcss: true
    }
  },
  "features": {
    
  }
}