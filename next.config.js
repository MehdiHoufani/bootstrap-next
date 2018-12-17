/* eslint-disable no-unused-vars */
module.exports = {
	webpack: (config, {buildId, dev, isServer, defaultLoaders}) => {
		config.module.rules.push(...[
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
	useFileSystemPublicRoutes: false,
	webpackDevMiddleware: config => {
		// Perform customizations to webpack dev middleware config
		// Important: return the modified config
		return config;
	}
};