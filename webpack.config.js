const webpack = require('webpack');
const path = require('path');
module.exports = {
  devtool: 'eval',
  entry: './public/app/main.js',
  output: {
    publicPath: '/public/',
    path: path.join(__dirname, 'public/static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: [
      'babel-loader'
    ]
  },
  {
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader',
    ]
  },
  {
    test: /\.scss$/,
    exclude: /node_modules/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        query: {
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        query: {
          outputStyle: 'expanded',
          sourceMap: true
        }
      }
    ]
  }
]
  }
};
