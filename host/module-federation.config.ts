import { createModuleFederationConfig } from '@module-federation/modern-js';
import path from 'path';

export default createModuleFederationConfig({
  name: 'modern_host',
  remotes: {
    modern_consumer: 'modern_consumer@http://localhost:3002/static/mf-manifest.json'
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    '@module-federation/modern-js': { singleton: true, requiredVersion: false },
  },
  shareStrategy: 'loaded-first',
  // runtimePlugins: [
  //   path.join(__dirname, './src/plugins/retry.ts'),
  // ],
});
