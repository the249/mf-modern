import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    moduleFederationPlugin(),
    tailwindcssPlugin(),
  ],
  server: {
    port: 3003,
  },
  output: {
    assetPrefix: 'http://localhost:3003/', 
  },
});
