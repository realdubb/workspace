var webpack = require('webpack');
module.exports = {  
  entry: './app/main.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // Add minification
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}