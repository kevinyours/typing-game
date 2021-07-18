const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { resolve } = require("path");

module.exports = {
 entry: {
  main: "./src/app.js",
 },
 output: {
  filename: "[name].js",
  path: resolve(__dirname, "dist"),
 },
 resolve: {
  extensions: [".js"],
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader",
   },
  ],
 },
 plugins: [
  new CleanWebpackPlugin({
   cleanAfterEveryBuildPatterns: ["dist"],
  }),
 ],
};
