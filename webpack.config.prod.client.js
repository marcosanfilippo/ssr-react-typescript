const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    client: './src/client/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/prod/')
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {
        test: /\.tsx?$/,
        exclude: path.resolve(__dirname, 'node_modules/'),
        loader: 'ts-loader'
      }
    ]
  }
};
