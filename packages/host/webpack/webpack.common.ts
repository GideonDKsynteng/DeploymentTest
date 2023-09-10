const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const DefinePlugin = require("webpack/lib/DefinePlugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(c|s[ac])ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpeg|jpeg|gif)/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        type: "asset",
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  }
};
