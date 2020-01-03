const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { dotenvOverride, createVarsDefinePlugin } = require('./utils');
const rootPath = path.join(__dirname, '../../client');

dotenvOverride();

const publicPath = process.env.PATH_STATIC + '/'
const logoPath = process.env.PATH_ASSETS + '/logo.png'

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': path.join(rootPath, 'src/index.tsx')
  },
  output: {
    path: path.join(rootPath, 'dist'),
    publicPath
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': rootPath
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin()),
    new HtmlWebpackPlugin({
      title: 'DreamTec',
      logo: logoPath,
      hash: true,
      template: path.join(rootPath, 'public/index.html')
    })
  ]
}
