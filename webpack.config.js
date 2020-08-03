const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    loaders: [
      { test: /\.jsx/, loader: 'babel', include: path.join(__dirname, 'src') },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.(svg|ttf|woff|woff2|eot)$/, loader: 'url?limit=5000' },
  ],
    rules: [
      {
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devtool: 'source-map'
}
