import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'modern_provider',
  exposes: {
    '.': './src/components/ProviderComponent.tsx',
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    '@module-federation/modern-js': { singleton: true, requiredVersion: false },
  },
  shareStrategy: 'loaded-first',
});
