/*eslint-env node */
const cssnext = require('postcss-cssnext');
module.exports = {
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
    ],
  },
  vue: {
    loaders: {
      js: 'babel!eslint',
    },
    autoprefixer: false,
    postcss: [
      cssnext({ browsers: ['last 2 versions', 'Android >= 2.1'] }),
    ],
  },
};
