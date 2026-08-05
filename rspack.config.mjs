import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import { ReanimatedPlugin } from '@callstack/repack-plugin-reanimated';
import rspack from '@rspack/core';
import { StorybookPlugin } from '@storybook/react-native/repack/withStorybook';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storybookEnabled = process.env.STORYBOOK_ENABLED === 'true';
const storybookWebsockets =
  process.env.STORYBOOK_WEBSOCKETS === 'false' ? undefined : 'auto';

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default Repack.defineRspackConfig({
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions({
      enablePackageExports: true,
    }),
  },
  module: {
    rules: [
      {
        test: /\.[cm]?[jt]sx?$/,
        type: 'javascript/auto',
        use: {
          loader: '@callstack/repack/babel-swc-loader',
          parallel: true,
          options: {},
        },
      },
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin(),
    new ReanimatedPlugin({
      unstable_disableTransform: true,
    }),
    new rspack.DefinePlugin({
      STORYBOOK_ENABLED: JSON.stringify(storybookEnabled),
    }),
    new StorybookPlugin({
      enabled: storybookEnabled,
      websockets: storybookWebsockets,
      liteMode: true,
    }),
  ],
});
