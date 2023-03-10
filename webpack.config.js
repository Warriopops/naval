const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-template-loader',
        options: {
          transformAssetUrls: {
            // ...
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue']
  }
}
