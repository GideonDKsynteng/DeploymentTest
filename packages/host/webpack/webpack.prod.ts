const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const getDomain = () => {
  if (process.env.DOMAIN) return `https://${process.env.DOMAIN}`;
  if (process.env.SERVER_URI) return `http://${process.env.SERVER_URI}`;
  return "http://localhost";
};

const prodConfig = {
  mode: "production",
  output: {
    filename: "host.[contenthash].js",
    clean: true,
    publicPath: `/`
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        marketing: `marketing@${getDomain()}/marketing/remoteEntry.js`,
        auth: `auth@${getDomain()}/auth/remoteEntry.js`,
        dashboard: `dashboard@${getDomain()}/dashboard/remoteEntry.js`
      },
      shared: packageJson.dependencies
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
