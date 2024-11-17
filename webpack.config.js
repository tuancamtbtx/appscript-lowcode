const GasPlugin = require("gas-webpack-plugin");

const entry = "./build/src/index.js";

module.exports = {
  // we always use dev mode because bundle size is unimportant - code runs server-side
  mode: "development",
  context: __dirname,
  entry,
  output: {
    path: __dirname,
    filename: "Code.js",
  },
  plugins: [
    new GasPlugin({
      autoGlobalExportsFiles: [entry],
    }),
  ],
  devtool: false,
  resolve: {
    fallback: {
      fs: false,
    },
    extensions: [".ts", ".js"],
  },
};
