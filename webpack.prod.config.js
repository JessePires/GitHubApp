'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = validate({
  entry: path.join(__dirname, 'src', 'index.js'),
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },

  plugins: [  
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'procces.env': {
        'NODE_ENV': '"production"'
      }
    }),

    new webpack.optimize.UglifyJsPlugin({ // to minify
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(), // to avoid duplicate code

    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlPlugin({
      title: 'GitHub App',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }, 
    {
      test: /\.css$/,
      exclude: /node_modules/,
      include: /src/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }]
  }

});
