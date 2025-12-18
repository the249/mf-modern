import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'modern_provider',
  exposes: {
    '.': './src/components/index.ts',
    './catalyst': './src/components/Catalyst/index.ts',
  },
  shared: {
    react: { singleton: true, requiredVersion: false },
    'react-dom': { singleton: true, requiredVersion: false },
    '@modern-js/plugin-tailwindcss': { singleton: true, requiredVersion: false },
  },
  shareStrategy: 'loaded-first',
});
