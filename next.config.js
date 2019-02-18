/* eslint-disable no-unused-vars */

const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.module.rules.push(
      ...[
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,

          use: ["babel-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader", "eslint-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {}
            }
          ]
        }
      ]
    );
    return config;
  },
  useFileSystemPublicRoutes: false,
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  }
});
