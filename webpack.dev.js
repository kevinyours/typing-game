const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const { resolve } = require("path");

module.exports = merge(common, {
 mode: "development",
 devtool: "eval-cheap-module-source-map",
 devServer: {
  open: true,
  overlay: true,
  port: 8080,
  stats: "errors-only",
  hot: true,
  historyApiFallback: true,
 },
 module: {
  rules: [
   {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: resolve(__dirname, "src/index.html"),
   filename: "index.html",
   minify: false,
   hash: false,
  }),
 ],
});
