const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'build'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
				}
			},
			{
				test: /\.styl$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									'postcss-preset-env',
									'mqpacker',
									'cssnano'
								],
							}
						},
					},
					'stylus-loader'
				]
			},
			{
				test: /\.(eot|ttf|woff2?|otf|svg)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pug/index.pug'
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[contenthash].css'
		}),
		new ESLintPlugin({
			extensions: ['js', 'jsx']
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin({
				test: /\.css$/,
				minify: CssMinimizerPlugin.cssnanoMinify,
				minimizerOptions: {
					preset: [
						"default",
						{
							discardComments: {
								removeAll: true
							},
						},
					],
				},
			}),
		],
	}
};

module.exports = (env, options) => {
	config.devtool = options.mode === 'production' ? false : 'eval-cheap-module-source-map';

	if (options.mode === 'production') {
		return config;
	} else {
		return config;
	}
}
