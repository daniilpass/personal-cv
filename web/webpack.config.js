const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const settings = require('./settings');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app/js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'app/images',
        },   
      },
      {
        test: /\.txt$/i,
        loader: 'raw-loader',  
      }
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: false,
      settings: settings
    }),
    new MiniCssExtractPlugin({
      filename: "./app/css/[name].css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "public", 
          to: "public",        
          globOptions: {
            ignore: ["**/index.html*"],
          }, 
        },
      ],
    }),
  ],
};
