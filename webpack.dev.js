var path = require('path')
var ExtractTextPlugin = require('Extract-text-webpack-plugin')

module.exports = {
  target: 'web',
  entry: {
    app: './js/src/app.js',
    vendor: './js/src/vendor.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'js', 'dist'),
    publicPath: 'js/dist'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../../css/main.css')
  ],
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devtool: 'source-map',
  stats: 'verbose'
}