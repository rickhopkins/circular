var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app/app.js',
	output: {
		filename: './index.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}
			},
			{
				test: /\.css$/,
				use:[
					{ loader: 'css-loader' }
				]
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
};