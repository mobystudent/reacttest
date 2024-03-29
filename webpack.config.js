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
		publicPath: '',
		assetModuleFilename: 'images/[name]__[hash:7].[ext]',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
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
				test: /\.module\.styl/,
				exclude: '/node_modules/',
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options:{
							importLoaders: 2,
							modules: {
								localIdentName: '[local]__[sha1:hash:hex:7]'
							}
						}
					},
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
				test: /^((?!\.module).)*(styl|css)$/,
				exclude: '/node_modules/',
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
				test: /\.(png|svg|jpe?g|gif)$/,
				type: 'asset/resource',
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
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src/'),
			'~c': path.resolve(__dirname, 'src/components/'),
			'~p': path.resolve(__dirname, 'src/pages/'),
			'~s': path.resolve(__dirname, 'src/store/'),
			'~m': path.resolve(__dirname, 'src/main/'),
			'~i': path.resolve(__dirname, 'src/images/')
		},
		extensions: ['.js', '.jsx']
	},
	devServer: {
		port: 3000,
		hot: false,
		liveReload: false,
		historyApiFallback: true,
		client: {
			overlay: false
		}
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
