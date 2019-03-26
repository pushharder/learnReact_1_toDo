const path = require("path");
const html_webpack_plugin = require("html-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, "src/index.tsx"),
	output: {
		filename: "build.js",
		path: path.join(__dirname, "/dist")
	},
	devtool: "eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "/dist")
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js|tsx|ts)$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [
		new html_webpack_plugin({
			template: path.join(__dirname, "/src/index.html")
		})
	]
};
