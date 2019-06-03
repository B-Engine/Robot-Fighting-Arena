const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rootDir = path.resolve(__dirname, "../").split(/(\\|\/)dist/)[0];
console.log("MY ROOT DIR IS " + rootDir);
module.exports = (env) => {
  return {
    entry: {
      main: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        path.resolve(rootDir, './client/js/index.js'),
      ]
    },
    output: {
      path: path.join(rootDir, './dist/client'),
      publicPath: '/',
      filename: '[name].[hash].js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(j|t)s$/,
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
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          exclude: /node_modules/,
          enforce: "pre"
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: path.resolve(rootDir, './client/html/index.html'),
        filename: path.resolve(rootDir, './dist/client/index.html'),
        excludeChunks: ['server'],
        hash: true
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
    ]
  }
};
