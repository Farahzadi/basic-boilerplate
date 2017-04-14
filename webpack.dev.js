var path = require('path')
var webpack = require('webpack')
var BrowserSync = require('browser-sync-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  target: 'web',
  entry: {
    app: './js/src/app.js',
    vendor: './js/src/vendor.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'js', 'dist'),
    publicPath: 'js/dist'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new BrowserSync({
      host: 'localhost',
      port: '3000',
      proxy: 'http://localhost:8000',
      files: '*.html',
    }, {
      reload: false
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: 'pug/index.pug'
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: __dirname
    })
  ],
  devtool: 'inline-source-map',
  stats: 'verbose',
  devServer: {
    port: 8000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
