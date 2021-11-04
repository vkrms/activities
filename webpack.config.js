const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.ts"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js"
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
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
