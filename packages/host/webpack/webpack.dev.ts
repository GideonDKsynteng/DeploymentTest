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
      remotes: {
        marketing: `marketing@http://${hostURI}:8081/remoteEntry.js`,
        auth: `auth@http://${hostURI}:8082/remoteEntry.js`,
        dashboard: `dashboard@http://${hostURI}:8083/remoteEntry.js`,
      },
      shared: {
        ...packageJason.dependencies,
      },
    }),
  ],
  devServer: {
    port: 8000,
    open: true,
    allowedHosts: "all",
    proxy: {
      // "/api/v1/dbim": "http://localhost:3001",
    },
    historyApiFallback: true,
  },
  output: {
    publicPath: `http://${hostURI}:8000/`,
  },
};

module.exports = merge(commonConfig, devConfig);
