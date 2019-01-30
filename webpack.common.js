const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const outputFolder = 'www';

module.exports = {
  entry: path.join(__dirname, 'src/js/app.js'),
  output: {
    path: path.join(__dirname, outputFolder),
    filename: 'js/bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src/js'), 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:
            'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
        }),
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputFolder]),
    new CopyWebpackPlugin(
      [{ from: 'src/css', to: 'css' }, { from: 'src/index.html', to: '.' }],
      { debug: true },
    ),
    new ExtractTextPlugin({
      filename: './css/style.css',
      allChunks: true,
    }),
  ],
};
