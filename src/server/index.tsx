import * as express from 'express';
import config from '../config/server';
import * as routes from '../routes';
import { server } from './routes';

if (process.env.NODE_ENV === 'production') {
  server.use('/build/prod/', express.static('./build/prod/'));
} else {
  server.use('/build/dev/', express.static('./build/dev/'));
}

server.all('/*', (req: express.Request, res: express.Response) =>
  routes.getDefault(req, res)
);

server.listen(config.port, () => {
  // tslint:disable
  console.info(`Running on ${config.port} on mode: ${process.env.NODE_ENV}`);
});
