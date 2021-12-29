const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.[contenthash:6].js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    static: './',
    port: 7025,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.ya?ml$/,
        type: 'json',
        include: path.resolve('data'),
        use: 'yaml-loader'
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      inject: true,
      hash: true,
    }),
  ],
};
