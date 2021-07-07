const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../dev'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dev'),
    port: 8081,
    compress: true,
    open: true,
    historyApiFallback: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3001',
    //   },
    //   '/img/country': {
    //     target: 'http://localhost:3001',
    //   },
    // },
  },
});
