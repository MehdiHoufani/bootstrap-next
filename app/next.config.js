/* eslint-disable no-unused-vars */

const withSass = require("@zeit/next-sass");
const path = require("path");

module.exports = withSass({
  distDir: "../build",
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
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
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000

            }
          }
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
