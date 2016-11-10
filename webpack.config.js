var path = require('path');
var webpack = require('webpack');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	entry: './main.js',
	devServer: {
        outputPath: __dirname, filename: 'bundle.js'
    },
	output: { path: __dirname, filename: 'bundle.js'},
	plugins: [
        new WriteFilePlugin()
    ],
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015','react']
				}
			}
		]
	},
};