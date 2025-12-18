import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import tailwindPostcssPlugin from '@tailwindcss/postcss';

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
  ],
  server: {
    port: 3003,
  },
  output: {
    assetPrefix: 'http://localhost:3003/', 
  },
  tools: {
    postcss: (_, {addPlugins}) => {
      addPlugins(tailwindPostcssPlugin);
    }
  }
});
