/* eslint-disable no-unused-vars */
module.exports = {
	webpack: (config, {buildId, dev, isServer, defaultLoaders}) => {
		// Perform customizations to webpack config
		config.modules.rules.push(...[
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"]
			}
		]);
		return config;
	},
	webpackDevMiddleware: config => {
		// Perform customizations to webpack dev middleware config
		// Important: return the modified config
		return config;
	}
};