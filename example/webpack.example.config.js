/*eslint-env node */
const cssnext = require('postcss-cssnext');
module.exports = {
  entry: './example',
  output: {
    filename: './example/dist/build.js',
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel!eslint' },
      { test: /\.svg$/, loader: 'url?limit=10000'},
    ],
  },
  vue: {
    loaders: {
      js: 'babel!eslint',
    },
    postcss: [
      cssnext({ browsers: ['last 2 versions', 'Android >= 2.1'] }),
    ],
  },
};
