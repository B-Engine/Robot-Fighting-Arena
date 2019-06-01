const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const rootDir = path.resolve(__dirname, "../");
module.exports = (env, argv) => {
  const SERVER_PATH = (argv.mode === 'production') ?
    path.resolve(rootDir, './src/server/server-prod.ts') :
    path.resolve(rootDir, './src/server/server-dev.ts')
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
    }
  })
}