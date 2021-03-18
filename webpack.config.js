const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './qrcode.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'qrcode.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
