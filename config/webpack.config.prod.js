const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    port: 8085,
  },
  plugins: [
    // new BundleAnalyzerPlugin()
    new CopyWebpackPlugin({
      patterns: [
        // { from: 'src/_redirects'},
        { from: 'src/_redirects' },
        // { from: 'src/assets/images/svg/favicon.svg' },
        // { from: 'rs_school_js.svg' },
        // { from: 'src/assets/images/', to: 'assets/images/' },
        // { from: 'src/assets/icons/', to: 'assets/icons/' },
        // { from: 'src/assets/favicon/', to: 'assets/favicon/' },
        // { from: 'src/assets/fonts/', to: 'assets/fonts/'},
      ],
    }),
  ],
});
