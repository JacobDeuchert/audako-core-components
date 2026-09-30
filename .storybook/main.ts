import type { StorybookConfig } from '@storybook/svelte-vite';
import type { Plugin } from 'vite';

// audako systems serve assets/conf/application.config without CORS headers,
// so the preview cannot fetch it cross-origin. This dev-server route fetches
// it server-side instead: GET /__audako/config?system=https://host
// Only that one file is ever requested, whatever host is passed.
function systemConfigProxy(): Plugin {
  return {
    name: 'audako-system-config-proxy',
    configureServer(server) {
      server.middlewares.use('/__audako/config', async (req, res) => {
        const system = new URL(req.url ?? '', 'http://localhost').searchParams.get('system') ?? '';
        let origin: string;
        try {
          const url = new URL(system);
          if (url.protocol !== 'https:' && url.protocol !== 'http:') throw new Error();
          origin = url.origin;
        } catch {
          res.statusCode = 400;
          res.end(`Invalid system URL: ${system}`);
          return;
        }

        try {
          const response = await fetch(`${origin}/assets/conf/application.config`);
          res.statusCode = response.status;
          res.setHeader('Content-Type', 'application/json');
          res.end(await response.text());
        } catch (error) {
          res.statusCode = 502;
          res.end(`Could not reach ${origin}: ${(error as Error).message}`);
        }
      });
    },
  };
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  // addon-essentials, addon-links, blocks and addon-mdx-gfm were folded into
  // the storybook core package in v9.
  addons: ['@storybook/addon-svelte-csf', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {},
  },
  // ./static holds auth-callback.html, the Keycloak redirect target.
  staticDirs: ['../src/assets', './static'],
  viteFinal: (config) => ({ ...config, plugins: [...(config.plugins ?? []), systemConfigProxy()] }),
};
export default config;
