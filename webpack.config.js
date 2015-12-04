var webpack = require('webpack');

module.exports = {
  entry: {
    devServerClient: 'webpack-dev-server/client?http://localhost:3000',
    bundle: ['./src/index.js', 'webpack/hot/only-dev-server'],
    vendors: ['react'],
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 versions' },
      { test: require.resolve('react'), loader: 'expose?React' },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
};