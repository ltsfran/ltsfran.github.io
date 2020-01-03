const merge = require('webpack-merge');
const baseConfig = require('./config.base');

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    ]
  },
  mode: 'development',
  plugins: []
})
