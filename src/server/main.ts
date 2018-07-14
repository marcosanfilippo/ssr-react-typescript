import * as express from 'express';
import config from '../config/server';
import serverRender from '../renderers/server';
import { data } from '../../test/mocks/data/testData';

const stringify = require('javascript-stringify');

const app = express();
app.use(express.static('public'));

app.get('/', async (req: express.Request, res: express.Response) => {
  const content = await serverRender();
  res.render('index', {
    title: 'Advanced React Application.',
    ...content,
    stringify,
  });
});

app.get('/data', (req: express.Request, res: express.Response) => {
  res.send(data);
});

app.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Running on ${config.port}`);
});
