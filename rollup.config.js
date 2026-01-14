import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Plugin to strip absolute paths from worklet locations
const stripAbsolutePathsPlugin = () => ({
  name: 'strip-absolute-paths',
  generateBundle(options, bundle) {
    for (const [fileName, asset] of Object.entries(bundle)) {
      if (asset.type === 'asset' || fileName.endsWith('.mjs') || fileName.endsWith('.cjs')) {
        if (asset.code) {
          asset.code = asset.code.replace(new RegExp(__dirname, 'g'), '.');
        }
      }
    }
  },
});

export default {
  input: 'src/index.js',
  external: ['react', 'react/jsx-runtime', 'react-native', 'react-native-reanimated', 'react-native-svg'],
  output: [
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
      plugins: ['react-native-reanimated/plugin'],
      extensions: ['.js', '.jsx'],
      exclude: 'node_modules/**',
    }),
    stripAbsolutePathsPlugin(),
  ],
};
