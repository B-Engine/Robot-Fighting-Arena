import path from 'path'
import express from 'express'
import http from 'http'
import socketIO from 'socket.io'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'
const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html'),
  compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))
app.use(webpackHotMiddleware(compiler))
app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})
const PORT = process.env.PORT || 8080
const server = http.Server(app)
const io = new socketIO(server)

import world from './map.js'

var world1 = new world(20, 20)

import player from './player.js'

var player1 = new player(0, 10, 10)

io.on('connection', (socket) => {
})

server.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})

setInterval(() => {
  io.emit('map', world1)
}, 1000)