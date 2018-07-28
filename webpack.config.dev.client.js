const path = require('path');

module.exports = {
  entry: {
    client: './src/client/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/dev/')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        }
      }
    ]
  }
};
