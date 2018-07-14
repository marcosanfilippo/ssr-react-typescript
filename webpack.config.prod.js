const path = require('path');
const nodeExternals = require('webpack-node-externals');

// https://webpack.js.org/concepts/

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'axios', 'express'],
    app: './src/server/index.tsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build/prod/')
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
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
  },
  target: 'node',
  externals: [new nodeExternals()]
};
