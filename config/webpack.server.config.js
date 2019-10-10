const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require("copy-webpack-plugin");

const rootDir = path.resolve(__dirname, "../");
module.exports = (env, argv) => {
  const SERVER_PATH = path.resolve(rootDir, './server/index.ts');
  return ({
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.resolve(rootDir, './dist'),
      publicPath: path.resolve(rootDir, './dist'),
      filename: '[name].js'
    },
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: {
        server: path.resolve(rootDir, 'server/'),
        assets: path.resolve(rootDir, "assets/"),
        shared: path.resolve(rootDir, "shared/")
      }
    },
    module: {
      rules: [
        {
          // Transpiles ES6-8 into ES5
          test: /\.(t|j)s$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(argv.mode),
        },
      }),
      new CopyPlugin([
        { from: path.resolve(rootDir, "hostconfig/web.config"), to: path.resolve(rootDir, "dist/web.config") },
      ]),
    ]
  })
}