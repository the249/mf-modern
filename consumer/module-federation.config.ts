import { createModuleFederationConfig } from '@module-federation/modern-js';
import path from 'path';

export default createModuleFederationConfig({
  name: 'modern_consumer',
  filename: 'remoteEntry.js',
  // remotes: {
  //   'provider': 'modern_provider@http://localhost:3001/mf-manifest.json',
  // },
  exposes: {
    './app': './src/export.tsx',
  },
  bridge: {
    enableBridgeRouter: true,
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    '@module-federation/modern-js': { singleton: true, requiredVersion: false },
  },
  shareStrategy: 'loaded-first',
  runtimePlugins: [
    path.join(__dirname, './src/plugins/retry.ts'),
  ],
});
