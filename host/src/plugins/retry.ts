import { RetryPlugin } from '@module-federation/retry-plugin';

// In your Module Federation configuration
const retryPlugin = () => RetryPlugin({
  retryTimes: 3,
  retryDelay: 1000,
})
export default retryPlugin;

