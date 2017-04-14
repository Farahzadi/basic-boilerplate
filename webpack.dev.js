var path = require('path')

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
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'}
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  stats: 'verbose'
}