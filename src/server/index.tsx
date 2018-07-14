import * as express from 'express';
import config from '../config/server';
import * as server from '../routes';

const app = express();

app.get('/', (req: express.Request, res: express.Response) =>
  server.getHome(req, res)
);

app.get('/welcome', (req: express.Request, res: express.Response) =>
  server.getWelcome(req, res)
);

app.all('/*', (req: express.Request, res: express.Response) =>
  server.getDefault(req, res)
);

app.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Running on ${config.port}`);
});
