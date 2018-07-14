import * as express from 'express';
import * as routes from '../routes';

const server = express();

server.get('/', (req: express.Request, res: express.Response) =>
  routes.getHome(req, res)
);

server.get('/welcome', (req: express.Request, res: express.Response) =>
  routes.getWelcome(req, res)
);

server.all('/*', (req: express.Request, res: express.Response) =>
  routes.getDefault(req, res)
);

export { server };
