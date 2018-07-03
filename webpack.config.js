const webpack = require("webpack");
const path = require("path");

// https://webpack.js.org/concepts/

module.exports = {
  entry: {
    vendor: ["react", "react-dom", "axios", "lodash"],
    app: "./src/index.tsx"
  },
  output: {
    filename: "./dist/bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".webpack.js", ".web.js"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    })
  ]
};
