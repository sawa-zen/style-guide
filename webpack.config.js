var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = [{
  entry: {
    example: './example/web/example.js',
  },
  output: {
    path: path.resolve(__dirname, 'example', 'web', 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'bc-coordinate',
      filename: 'index.html',
      template: './example/web/example.html',
      inject: 'body',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}];
