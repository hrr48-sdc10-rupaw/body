const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/client'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',"@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  },
  mode: 'development'
};