// https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    game: './assets/js/game.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },
      { test: /\.html$/, use: ['html-loader'] },
      //file-loader(for fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CopyWebpackPlugin([
      { context: 'assets/media/', from: '**', to: 'assets/media/' }
    ])
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist/assets/media"),
    stats: 'errors-only',
    open: true,
    port: 12001,
    compress: true,
  },
  devtool: 'inline-source-map'
}