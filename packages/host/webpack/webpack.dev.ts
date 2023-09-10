const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJason = require("../package.json");

const hostURI = process.env.SERVER_URI || "localhost";

const devConfig = {
  mode: "development",
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {},
      shared: {
        ...packageJason.dependencies,
      },
    }),
  ],
  devServer: {
    port: 7000,
    open: true,
    allowedHosts: "all",
    proxy: {
      // "/api/v1/dbim": "http://localhost:3001",
    },
    historyApiFallback: true,
  },
  output: {
    publicPath: `http://${hostURI}:7000/`,
  },
};

module.exports = merge(commonConfig, devConfig);
