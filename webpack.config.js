var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './source/ractive-dropdown.js',
  output: {
    path: __dirname,
    filename: 'ractive-dropdown.min.js',
    library: 'RactiveDropdown',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.html/, loader: 'ractive'}
    ]
  }
};