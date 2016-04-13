/*eslint-env node */
module.exports = Object.assign({
  entry: './example',
  output: {
    filename: '/build.js',
  },
}, require('./webpack.base'));
