import * as express from 'express';
import * as routes from '../routes';

const server = express();

server.get('/', (req: express.Request, res: express.Response) =>
  routes.getHome(req, res)
);

export { server };
