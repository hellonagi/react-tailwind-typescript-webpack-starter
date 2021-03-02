const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const RobotstxtPlugin = require('robotstxt-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/styles'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[contenthash:8].css',
      chunkFilename: './static/css/[name].[contenthash:8].chunk.css',
    }),
    new RobotstxtPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
})
