var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './components/my-test-component/my-test-component.js',
	output: {
		filename: './index.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
};