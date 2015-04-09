module.exports = {
	entry: './index.ts',
	output: {
		filename: 'app.js',
		path: 'assets',
		publicPath: 'http://localhost:8080/assets'
	},
	module: {
		loaders: [{
			test: /\.jsx$/,
			loader: 'jsx-loader?insertPragma=React.DOM&Harmony'
		},{
			test: /\.ts$/,
			loader: 'ts-loader?compiler=jsx-typescript'
		}]
	},
	externals: {
		'react': 'React'
	},
	resolve: {
		extensions: ['', '.js', '.jsx', '.ts']
	}
}
