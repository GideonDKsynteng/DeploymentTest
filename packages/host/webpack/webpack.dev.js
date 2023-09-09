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
};
