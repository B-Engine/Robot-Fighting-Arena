import path from 'path';
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../../config/webpack.dev.config.js';
const app = express(),
  DIST_DIR = path.resolve(__dirname, '../dist/'),
  HTML_FILE = path.join(DIST_DIR, 'index.html'),
  compiler = webpack(config as any);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res, next) => {
  (compiler.outputFileSystem as any).readFile(
    HTML_FILE,
    (err: any, result: any) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    }
  );
});
const PORT = process.env.PORT || 8080;
const server = new http.Server(app);
const io = socketIO(server);

import world from './map.js';

var world1 = new world(20, 20);

import player from './player.js';

var player1 = new player(0, 10, 10);

io.on('connection', socket => {});

server.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to quit.');
});

setInterval(() => {
  io.emit('map', world1);
  io.emit('player', player1);
}, 1000);
