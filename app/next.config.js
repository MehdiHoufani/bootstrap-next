/* eslint-disable no-unused-vars */

const withSass = require("@zeit/next-sass");
const withProgressbar = require("next-progressbar");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withProgressbar({
  progressBar: {
    profile: true
  },
  ...withSass({
    distDir: "../dist",
    exportPathMap: function() {
      return {
        "/": { page: "/" }
      };
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: dev ? "[name].css" : "[name].[hash].css",
          chunkFilename: dev ? "[id].css" : "[id].[hash].css"
        })
      );

      config.module.rules.push(
        ...[
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,

            use: ["babel-loader"]
          },
          {
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|pdf)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000
              }
            }
          },
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hot: process.env.NODE_ENV === "development"
                }
              },
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ]
          }
        ]
      );
      dev &&
        config.module.rules.push({
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["eslint-loader"]
        });

      return config;
    },
    useFileSystemPublicRoutes: false
  })
});
