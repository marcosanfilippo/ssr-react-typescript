import * as express from 'express';
import * as React from 'react';
import App from '../components/App';
import config from '../config/server';
import { getData } from '../server/svc/backend'; // or use import * as NAME and then NAME.myFunction()
import { renderHTML } from './renders';

const app = express();

app.get('/', async (req: express.Request, res: express.Response) => {
  const content = getData();
  content.then(data => {
    res.status(200).send(renderHTML(<App />));
  });
});

app.listen(config.port, () => {
  // tslint:disable-next-line:no-console
  console.info(`Running on ${config.port}`);
});
