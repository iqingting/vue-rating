/*eslint-env node */
module.exports = Object.assign({
  entry: './src/index.js',
  output: {
    library: 'VueRating',
    libraryTarget: 'umd',
    filename: 'vue-rating.js',
    path: './dist',
  },
  externals: {
    'vue': 'Vue',
  },
}, require('./webpack.base'));
