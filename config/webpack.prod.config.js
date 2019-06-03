const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootDir = path.resolve(__dirname, "../").split("/dist")[0];
module.exports = (env) => {
  return {
    entry: {
      main: path.resolve(rootDir, './client/js/index.js'),
    },
    output: {
      path: path.join(rootDir, './dist/client'),
      publicPath: '/',
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
          test: /\.(j|t)s$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
      new HtmlWebPackPlugin({
        template: path.resolve(rootDir, './client/html/index.html'),
        filename: path.resolve(rootDir, './dist/client/index.html'),
        excludeChunks: ['server'],
        hash: true
      })
    ]
  }
}