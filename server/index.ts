import path from 'path';
import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import { Logger } from './Logger';
import { InMemoryUserRepo } from './UserRepo';
import { Entity } from '../shared/Utilities/Entity';
import { EntityType } from '../shared/Utilities/EntityTypes';
import { Chassis } from './Components/DefinedChassis';
import { Components } from './Components/DefinedComponents';
import { User } from 'shared/UserTypes';

const app = express();
const DIST_DIR = path.resolve(__dirname, '../dist/client/');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
Logger.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  Logger.log('I AM IN DEV MODE');
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../config/webpack.dev.config');
  const compiler = webpack(webpackConfig as any);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(webpackHotMiddleware(compiler));

  app.use(express.static(DIST_DIR));

  app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err: any, result: any) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
} else {
  app.use(express.static(DIST_DIR));

  app.get('/*', (req, res, next) => {
    res.set('content-type', 'text/html');
    res.sendFile(HTML_FILE);
  });
}

const PORT = process.env.PORT || 8080;
const server = new http.Server(app);
const io = socketIO(server);
const userRepo = new InMemoryUserRepo();

io.on('connection', socket => {
  const userId =
    socket.client.request.headers['x-ms-client-principal-id'] || 'testid';
  socket.on('getUserData', response => response(userRepo.getUser(userId)));
  socket.on('createNewUser', response => {
    const user: User = {
      Id: userId,
      Type: EntityType.User,
      Data: {
        chassis: ['CH_0', 'CH_1', 'CH_2'],
        components: ['PA_0', 'PA_1', 'PA_2', 'PA_3']
      },
      Version: 0
    };

    response(userRepo.addUser(user));
  });
  socket.on('getComponentData', (id: string, response) => {
    response(Components.find(component => component.Id === id));
  });
  socket.on('getChassisData', (id: string, response) => {
    console.log(`finding chassis ${id}`);
    console.log(JSON.stringify(Chassis));
    const result = Chassis.find(chassis => {
      console.log(`${chassis.Id} compared to ${id}`);
      return chassis.Id === id;
    });
    console.log(`Result: ${JSON.stringify(result)}`);
    response(result);
  });
});

server.listen(PORT, () => {
  Logger.log(`App listening on http://localhost:${PORT}/`);
  Logger.log('Press Ctrl+C to quit.');
});
