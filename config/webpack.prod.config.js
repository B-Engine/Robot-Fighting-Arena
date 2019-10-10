const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootDir = path.resolve(__dirname, "../").split("/dist")[0];
module.exports = {
  entry: {
    main: path.resolve(rootDir, './client/src/index.tsx'),
  },
  output: {
    path: path.join(rootDir, './dist/client'),
    publicPath: "/",
    filename: '[name].[hash].js'
  },
  mode: "production",
  target: 'web',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ttf)$/,
        use: ['file-loader']
      },
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      client: path.resolve(rootDir, 'client/'),
      assets: path.resolve(rootDir, "assets/"),
      shared: path.resolve(rootDir, "shared/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(rootDir, './client/html/index.html'),
      filename: path.resolve(rootDir, './dist/client/index.html'),
      excludeChunks: ['server'],
      hash: true
    })
  ]
}
