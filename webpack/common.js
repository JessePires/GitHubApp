'use strict'

const path = require('path');

module.exports = {
  entry: path.join(__dirname, '..', 'src', 'index.js'),
  
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name]-[hash].js',
  },

  htmlPluginConfig: (template) => ({
    title: 'GitHub App',
    template: path.join(__dirname, '..', 'src', 'html', template)
  }),

  jsLoader: {
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel'
  }, 

  cssLoader: {
    test: /\.css$/,
    exclude: /node_modules/,
    include: /src/,
    loaders: ['style', 'css?modules']
  },

  resolve: {
    alias: {
      src: path.join(__dirname, '..', 'src'),
      components: path.join(__dirname, '..', 'src', 'components'),
    }, 
  }
};
