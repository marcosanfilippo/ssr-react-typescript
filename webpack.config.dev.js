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
    path: path.resolve(__dirname, 'build/dev/')
  },
  optimization: {
    minimize: false
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

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
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          experimentalWatchApi: true
        }
      }

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
};
