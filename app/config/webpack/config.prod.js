const merge = require('webpack-merge');
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  optimization: {
    minimize: true,
    splitChunks:{
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
  mode: 'production'
});
