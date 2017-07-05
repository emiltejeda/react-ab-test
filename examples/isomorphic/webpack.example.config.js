var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, './www/app.jsx')
  },
  output: {
    path: path.resolve(__dirname, './www'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ["react-native"]
        }
      }
    ],
    postLoaders: [
      {
        loader: "transform?envify"
      }
    ]
  },
  devtool: 'inline-source-map'
};