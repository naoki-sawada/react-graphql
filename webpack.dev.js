const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const outputFolder = 'www';

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, outputFolder),
    compress: true,
    port: 10080,
  },
});
