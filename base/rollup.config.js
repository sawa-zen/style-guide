import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

let plugins = [
  resolve(),
  babel(),
  commonjs(),
];

if (process.env.BUILD === 'production') {
  plugins.push(uglify());
}

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/style-guide.js',
    format: 'umd',
    name: 'StyleGuide',
  },
  external: [
    'react',
    'react-primitives',
    'styled-components/primitives',
  ],
  watch: {
    include: 'src/**',
  },
  plugins: plugins,
};
