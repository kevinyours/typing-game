const OptimizerCSSAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolve } = require("path");

module.exports = merge(common, {
 mode: "production",
 optimization: {
  minimizer: [
   new OptimizerCSSAssetWebpackPlugin(),
   new TerserWebpackPlugin({
    terserOptions: {
     compress: {
      drop_console: true,
     },
    },
   }),
  ],
  splitChunks: {
   chunks: "all",
  },
 },
 module: {
  rules: [
   {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
   },
  ],
 },
 plugins: [
  new MiniCssExtractPlugin({ filename: `[name].css` }),
  new HtmlWebpackPlugin({
   template: resolve(__dirname, "src/index.html"),
   filename: "index.html",
   minify: {
    collapseWhitespace: true,
    removeComments: true,
   },
   hash: true,
  }),
 ],
});
